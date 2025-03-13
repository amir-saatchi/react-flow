"use client";

import { ReactFlow } from "@xyflow/react";
import { Slide } from "@/components/Slide";

const nodeTypes = {
  slide: Slide,
};

export default function FlowScene() {
  const nodes = [
    {
      id: "0",
      type: "slide",
      position: { x: 0, y: 0 },
      data: { source: "# Hello, React Flow!" },
    },
    {
      id: "1",
      type: "slide",
      position: { x: 400, y: 0 },
      data: { source: "Second-node" },
    },
    {
      id: "2",
      type: "slide",
      position: { x: 800, y: 0 },
      data: { source: "Third-node" },
    },
  ];

  return (
    <>
      <ReactFlow nodes={nodes} nodeTypes={nodeTypes} fitView minZoom={0.1} />
    </>
  );
}
