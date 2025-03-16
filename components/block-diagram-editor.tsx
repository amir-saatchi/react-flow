// BlockDiagramEditor.tsx
"use client";

import React, { useCallback, useRef } from "react";
import { DragEvent } from "react";
import {
  ReactFlow,
  ReactFlowProvider,
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
import { useStore } from "@/store/store";
import { useShallow } from "zustand/shallow";
import defaultNode from "./nodes/default-node";
import processNode from "./nodes/process-node";
import decisionNode from "./nodes/decision-node";
import inputOutputNode from "./nodes/input-output-node";

// Define custom node types
const nodeTypes = {
  default: defaultNode,
  process: processNode,
  decision: decisionNode,
  inputOutput: inputOutputNode,
};

export default function BlockDiagramEditor() {
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
    selectedNode,
    updateNodeData,
  } = useStore(
    useShallow((state) => ({
      nodes: state.nodes,
      edges: state.edges,
      onNodesChange: state.onNodesChange,
      onEdgesChange: state.onEdgesChange,
      onConnect: state.onConnect,
      onNodeClick: state.onNodeClick,
      onPaneClick: state.onPaneClick,
      onDragOver: state.onDragOver,
      createNode: state.createNode,
      selectedNode: state.selectedNode,
      updateNodeData: state.updateNodeData,
    }))
  );

  // React Flow hook for converting screen coordinates to flow coordinates
  const { screenToFlowPosition } = useReactFlow();
  const reactFlowWrapper = useRef<HTMLDivElement>(null);

  // Handle drop event
  const onDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      // Get the node type and label from the drag event
      const type = event.dataTransfer.getData(
        "application/reactflow"
      ) as NodeType;
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
    },
    [screenToFlowPosition, createNode]
  );

  return (
    <div className="flex h-screen w-full">
      <LeftSidebar />
      <div className="flex-1 h-full" ref={reactFlowWrapper}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
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
