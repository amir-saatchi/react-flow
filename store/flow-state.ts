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
  selectedNode: CustomNode | null; // Currently selected node
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
  updateNodeData: (nodeId: string, data: Partial<CustomNode["data"]>) => void; // Update node data
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
  selectedNode: null, // No node selected initially

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
    set({ selectedNode: node });
  },

  onPaneClick: () => {
    // Clear the selected node when clicking on the pane
    set({ selectedNode: null });
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
        color: "#ffffff", // Default color
      },
    };
    set((state) => {
      state.nodes = [...state.nodes, newNode]; // Add the new node to the nodes array
    });
  },

  updateNodeData: (nodeId, data) => {
    // Update the data of a specific node
    set((state) => {
      const node = state.nodes.find((node) => node.id === nodeId);
      if (node) {
        node.data = { ...node.data, ...data }; // Merge new data with existing data
      }
    });
  },
});
