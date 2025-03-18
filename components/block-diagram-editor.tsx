// BlockDiagramEditor.tsx
"use client";

import React, { useCallback, useEffect, useRef } from "react";
import { DragEvent } from "react";
import {
  ReactFlow,
  Controls,
  Background,
  BackgroundVariant,
  useReactFlow,
  Panel,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import type { CustomNode, NodeType } from "@/lib/types";
import LeftSidebar from "./left-sidebar";
import RightSidebar from "./right-sidebar";
import { StoreType, useStore } from "@/store/store";
import { useShallow } from "zustand/shallow";
import defaultNode from "./nodes/default-node";
import processNode from "./nodes/process-node";
import decisionNode from "./nodes/decision-node";
import inputOutputNode from "./nodes/input-output-node";
import boundaryNode from "./nodes/boundary-node";
import groupNode from "./nodes/group-node";

// Define custom node types
const nodeTypes = {
  default: defaultNode,
  process: processNode,
  decision: decisionNode,
  inputOutput: inputOutputNode,
  group: groupNode,
  boundary: boundaryNode,
};

const onDrop = (
  event: DragEvent<HTMLDivElement>,
  createNode: (
    type: NodeType,
    position: { x: number; y: number },
    label?: string
  ) => void,
  screenToFlowPosition: (position: { x: number; y: number }) => {
    x: number;
    y: number;
  }
) => {
  event.preventDefault();
  // Get the node type and label from the drag event
  const type = event.dataTransfer.getData("application/reactflow") as NodeType;
  const label = event.dataTransfer.getData("application/nodeName");
  // Ensure the node type is valid
  if (typeof type === "undefined" || !type) {
    return;
  }
  // Convert screen coordinates to flow coordinates
  const position = screenToFlowPosition({
    x: event.clientX,
    y: event.clientY,
  });
  // Create and add the new node using the store action
  createNode(type, position, label);
};

const selector = (state: StoreType) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
  onNodeClick: state.onNodeClick,
  onPaneClick: state.onPaneClick,
  onDragOver: state.onDragOver,
  createNode: state.createNode,
  selectedNodeId: state.selectedNodeId,
  updateNodeData: state.updateNodeData,
  initializeBoundaryNode: state.initializeBoundaryNode,
});

export default function BlockDiagramEditor() {
  useEffect(() => {
    initializeBoundaryNode();
  }, []);

  // Zustand Store
  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    onNodeClick,
    onPaneClick,
    onDragOver,
    createNode,
    selectedNodeId,
    updateNodeData,
    initializeBoundaryNode,
  } = useStore(useShallow(selector));

  // React Flow hook for converting screen coordinates to flow coordinates
  const { screenToFlowPosition } = useReactFlow();
  const reactFlowWrapper = useRef<HTMLDivElement>(null);

  // Use useCallback to memoize the onDrop function
  const handleDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) =>
      onDrop(event, createNode, screenToFlowPosition),
    [createNode, screenToFlowPosition]
  );

  return (
    <div className="flex h-screen w-full">
      <LeftSidebar />
      <div className="flex-1 h-full relative" ref={reactFlowWrapper}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={handleDrop}
          onDragOver={onDragOver}
          onNodeClick={onNodeClick}
          onPaneClick={onPaneClick}
          nodeTypes={nodeTypes}
          fitView
          snapToGrid
          snapGrid={[15, 15]}
        >
          <Controls /> {/* Add controls for zooming and panning */}
          <Background variant={BackgroundVariant.Dots} gap={12} size={1} />{" "}
          {/* Add a dotted background */}
          <Panel position="top-center">
            <h1 className="text-xl font-bold">Block Diagram Editor</h1>{" "}
            {/* Add a title */}
          </Panel>
        </ReactFlow>
      </div>
      <RightSidebar />
    </div>
  );
}
