// flow-state.ts
import { CustomNode, NodeType } from "@/lib/types";
import { Edge, NodeChange, EdgeChange, Connection } from "@xyflow/react";
import { StateCreator } from "zustand";
import { applyNodeChanges, applyEdgeChanges, addEdge } from "@xyflow/react";
import { StoreType } from "./store";
import { DragEvent } from "react";

// Define the shape of the Flow state
type FlowState = {
  nodes: CustomNode[]; // Array of nodes in the flow
  edges: Edge[]; // Array of edges in the flow
  selectedNodeId: string | null; // Currently selected node Id
  onNodesChange: (changes: NodeChange<CustomNode>[]) => void; // Handler for node changes
  onEdgesChange: (changes: EdgeChange[]) => void; // Handler for edge changes
  onConnect: (connection: Connection) => void; // Handler for connecting nodes
  onNodeClick: (_: React.MouseEvent, node: CustomNode) => void; // Handler for node clicks
  onPaneClick: () => void; // Handler for clicking on the pane (background)
  onDragStart: (
    event: DragEvent<HTMLDivElement>,
    nodeType: NodeType,
    nodeName: string
  ) => void;
  onDragOver: (event: DragEvent<HTMLDivElement>) => void; // Handler for drag-over events
  createNode: (
    type: NodeType,
    position: { x: number; y: number },
    label?: string
  ) => void; // Create and add a new node
  deleteNode: (nodeId: string) => void;
  updateNodeData: (nodeId: string, data: Partial<CustomNode["data"]>) => void; // Update node data
  setParentNode: (nodeId: string, parentId: string | null) => void;
  initializeBoundaryNode: () => void;
  exportDiagram: () => string;
  importDiagram: (data: { nodes: CustomNode[]; edges: Edge[] }) => void;
};

// Define the FlowSlice type for Zustand
export type FlowSlice = FlowState;

// Create the Flow slice using Zustand's StateCreator
export const createFlowSlice: StateCreator<
  StoreType, // Combined store type
  [["zustand/immer", never]], // Use Immer for mutable updates
  [], // No additional middleware
  FlowSlice // Slice type
> = (set, get) => ({
  // Initial state
  nodes: [], // Empty array of nodes
  edges: [], // Empty array of edges
  selectedNodeId: null, // No node selected initially

  // Actions
  onNodesChange: (changes) => {
    // Apply changes to nodes (e.g., drag, resize)
    set((state) => {
      const updatedNodes = applyNodeChanges(changes, state.nodes);
      state.nodes = updatedNodes;
    });
  },

  onEdgesChange: (changes) => {
    // Apply changes to edges (e.g., reconnect)
    set((state) => {
      const updatedEdges = applyEdgeChanges(changes, state.edges);
      state.edges = updatedEdges;
    });
  },

  onConnect: (connection) => {
    // Add a new edge when nodes are connected
    set((state) => {
      state.edges = addEdge(connection, state.edges);
    });
  },

  onNodeClick: (_: React.MouseEvent, node: CustomNode) => {
    // Set the clicked node as the selected node
    set({ selectedNodeId: node.id });
  },

  onPaneClick: () => {
    // Clear the selected node when clicking on the pane
    set({ selectedNodeId: null });
  },

  onDragStart: (event, nodeType, nodeName) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.setData("application/nodeName", nodeName);
    event.dataTransfer.effectAllowed = "move";
  },

  onDragOver: (event) => {
    // Allow dragging over the pane
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  },

  createNode: (type, position, label) => {
    // Create a new node and add it to the nodes array
    const newNode: CustomNode = {
      id: `node_${Date.now()}`, // Unique ID for the node
      type, // Node type (e.g., "default", "process")
      position, // Position of the node on the canvas
      data: {
        type, // Node type (duplicated in data for convenience)
        label: label || `${type.charAt(0).toUpperCase() + type.slice(1)} Node`, // Default label
        description: "", // Empty description
        isAsset: false,
        csProperties: [],
        belongTo: "",
        connectTo: "",
        name: "",
      },
    };
    set((state) => {
      // state.nodes = sortNodes([...state.nodes, newNode]);
      state.nodes = sortNodesByTypes([...state.nodes, newNode]);
    });
  },

  initializeBoundaryNode: () => {
    const boundaryNode: CustomNode = {
      id: "boundary_node",
      type: "boundary",
      position: { x: 0, y: 0 },
      draggable: false,
      selectable: false,
      connectable: false,
      deletable: false,
      data: {
        type: "boundary",
        label: "Boundary",
        description: "",
        isAsset: false,
        name: "boundary",
        csProperties: [],
        belongTo: "",
        connectTo: "",
      },
    };

    set((state) => {
      state.nodes = [
        boundaryNode,
        ...state.nodes.filter((node) => node.id !== "boundary_node"),
      ];
    });
  },

  updateNodeData: (nodeId, data) => {
    set((state) => {
      state.nodes = state.nodes.map((node) =>
        node.id === nodeId ? { ...node, data: { ...node.data, ...data } } : node
      );
    });
  },

  setParentNode: (nodeId, parentId) => {
    set((state) => {
      const node = state.nodes.find((node) => node.id === nodeId); // Find The Node
      if (node) {
        node.parentId = parentId || undefined; // Assign the parentId
        if (parentId) {
          node.extent = "parent"; // Restrict child node movement within the parent
        } else {
          delete node.extent; // Remove extent if no parent
        }
      }
      // Check Parent and Child Order
      state.nodes = sortParentOrder([...state.nodes]);
    });
  },

  deleteNode: (nodeId) => {
    set((state) => {
      state.nodes = state.nodes.filter((node) => node.id !== nodeId);
    });
  },

  exportDiagram: () => {
    const { nodes, edges } = get();
    return JSON.stringify({ nodes, edges }, null, 2);
  },

  // Import action
  importDiagram: (data) => {
    set({
      nodes: data.nodes,
      edges: data.edges,
      selectedNodeId: null, // Clear selection after import
    });
  },
});

function sortNodesByTypes(nodes: CustomNode[]): CustomNode[] {
  const boundaryNode: CustomNode[] = nodes.filter(
    (node) => node.id === "boundary_node" && node
  );
  const groupNodes: CustomNode[] = nodes.filter(
    (node) => node.type === "group" && node
  );
  const otherNodes: CustomNode[] = nodes.filter(
    (node) => node.type !== "group" && node.type !== "boundary" && node
  );
  return [...boundaryNode, ...groupNodes, ...otherNodes];
}

// For sorting parent Child nodes
function sortParentOrder(nodes: CustomNode[]): CustomNode[] {
  return nodes.sort((a, b) => {
    if (a.type === "group" && b.parentId === a.id) return -1;
    if (b.type === "group" && a.parentId === b.id) return 1;
    return 0;
  });
}

// // For Sorting Parent in Depth
// function sortInDepth(nodes: CustomNode[]): CustomNode[] {
//   // First Find Boundary
//   const boundaryNode: CustomNode[] = nodes.filter(
//     (node) => node.id === "boundary_node" && node
//   );
//   // Get All group Nodes
//   const groupNodes: CustomNode[] = nodes.filter(
//     (node) => node.type === "group" && node
//   );
//   // Get group Node with no parent
//   const groupHead: CustomNode[] = groupNodes.filter(
//     (node) => node.parentId ?? node
//   );

//   const nodeHeadMap = new Map(groupHead.map(node => [node.id, node]));

//   // Get child group of Head group
//   const childsOfHead: CustomNode[] = groupHead.filter(node => node.id)
//   const otherNodes: CustomNode[] = nodes.filter(
//     (node) => node.type !== "group" && node.id !== "boundary_node" && node
//   );
// }
