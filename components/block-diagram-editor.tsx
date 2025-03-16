"use client";

import type React from "react";

import { useState, useCallback, useRef, type DragEvent } from "react";
import {
  ReactFlow,
  ReactFlowProvider,
  type ReactFlowInstance,
  type Node,
  type Edge,
  Controls,
  Background,
  BackgroundVariant,
  type Connection,
  addEdge,
  useNodesState,
  useEdgesState,
  type NodeTypes,
  Panel,
} from "@xyflow/react";
import "reactflow/dist/style.css";

import type { NodeData, NodeType } from "@/lib/types";
import LeftSidebar from "./left-sidebar";
import RightSidebar from "./right-sidebar";
import DefaultNode from "./nodes/default-node";
import ProcessNode from "./nodes/process-node";
import DecisionNode from "./nodes/decision-node";
import InputOutputNode from "./nodes/input-output-node";

// Define custom node types
const nodeTypes: NodeTypes = {
  default: DefaultNode,
  process: ProcessNode,
  decision: DecisionNode,
  inputOutput: InputOutputNode,
};

// Initial nodes and edges
const initialNodes: Node<NodeData>[] = [];
const initialEdges: Edge[] = [];

export default function BlockDiagramEditor() {
  // React Flow states
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [nodes, setNodes, onNodesChange] =
    useNodesState<NodeData>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance | null>(null);
  const [selectedNode, setSelectedNode] = useState<Node<NodeData> | null>(null);

  // Handle node selection
  const onNodeClick = useCallback(
    (_: React.MouseEvent, node: Node<NodeData>) => {
      setSelectedNode(node);
    },
    []
  );

  // Handle node deselection
  const onPaneClick = useCallback(() => {
    setSelectedNode(null);
  }, []);

  // Handle edge connections
  const onConnect = useCallback(
    (params: Connection) => {
      setEdges((eds) => addEdge({ ...params, animated: true }, eds));
    },
    [setEdges]
  );

  // Handle node property updates
  const updateNodeData = useCallback(
    (nodeId: string, data: Partial<NodeData>) => {
      setNodes((nds) =>
        nds.map((node) => {
          if (node.id === nodeId) {
            return {
              ...node,
              data: {
                ...node.data,
                ...data,
              },
            };
          }
          return node;
        })
      );
    },
    [setNodes]
  );

  // Handle drag over event
  const onDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  // Handle drop event
  const onDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      if (!reactFlowInstance || !reactFlowWrapper.current) return;

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData(
        "application/reactflow"
      ) as NodeType;
      const label = event.dataTransfer.getData("application/nodeName");

      // Check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = reactFlowInstance.flowToScreenPosition({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      // Create a new node
      const newNode: NodeData = {
        id: `node_${Date.now()}`,
        position,
        data: {
          label:
            label || `${type.charAt(0).toUpperCase() + type.slice(1)} Node`,
          description: "",
          color: "#ffffff",
        },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance, setNodes]
  );

  return (
    <div className="flex h-screen w-full">
      <LeftSidebar />
      <div className="flex-1 h-full" ref={reactFlowWrapper}>
        <ReactFlowProvider>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onNodeClick={onNodeClick}
            onPaneClick={onPaneClick}
            nodeTypes={nodeTypes}
            fitView
            snapToGrid
            snapGrid={[15, 15]}
          >
            <Controls />
            <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
            <Panel position="top-center">
              <h1 className="text-xl font-bold">Block Diagram Editor</h1>
            </Panel>
          </ReactFlow>
        </ReactFlowProvider>
      </div>
      <RightSidebar
        selectedNode={selectedNode}
        updateNodeData={updateNodeData}
      />
    </div>
  );
}
