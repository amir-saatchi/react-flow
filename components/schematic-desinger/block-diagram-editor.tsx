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
  ColorMode,
  MiniMap,
  DefaultEdgeOptions,
  ViewportPortal,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import type { CustomNode, NodeType } from "@/lib/types";
import LeftSidebar from "./left-sidebar";
import RightSidebar from "./right-sidebar";
import { StoreType, useStore } from "@/store/store";
import { useShallow } from "zustand/shallow";
import defaultNode from "../nodes/default-node";
import groupNode from "../nodes/group-node";
import { ZoomSlider } from "../react-flow-ui/zoom-slider";
import hardwareNode from "../nodes/hardware-node";
import { IconName } from "../left-sidebar/IconComponents";
import softwareNode from "../nodes/software-node";

// Define custom node types
const nodeTypes = {
  default: defaultNode,
  group: groupNode,
  Hardware: hardwareNode,
  Software: softwareNode,
};

const onDrop = (
  event: DragEvent<HTMLDivElement>,
  createNode: (
    type: NodeType,
    position: { x: number; y: number },
    label?: string,
    icon?: IconName
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
  const icon = event.dataTransfer.getData("application/nodeIcon") as IconName;

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
  createNode(type, position, label, icon);
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
  theme: state.theme,
});

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
    theme,
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

  const defaultEdgeOptions: DefaultEdgeOptions = {
    animated: true,
    type: "step",
  };

  return (
    <div className="flex h-screen w-full">
      <LeftSidebar />
      <div
        className="flex-1 h-full bg-white text-black dark:bg-black dark:text-white"
        ref={reactFlowWrapper}
      >
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
          colorMode={theme as ColorMode}
          defaultEdgeOptions={defaultEdgeOptions}
        >
          {/* <MiniMap nodeStrokeWidth={3} /> */}
          {/* <Controls /> Add controls for zooming and panning */}
          <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
          <ZoomSlider position="top-left" />

          <ViewportPortal>
            <div
              style={{
                transform: "translate(30px, 100px)",
                position: "absolute",
              }}
              className="border-2 border-dashed border-red-500 w-[900px] h-[600px]"
            >
              Boundary
            </div>
          </ViewportPortal>
        </ReactFlow>
      </div>
      <RightSidebar />
    </div>
  );
}
