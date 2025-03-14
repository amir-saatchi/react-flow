"use client";

import {
  Background,
  BackgroundVariant,
  NodeMouseHandler,
  ReactFlow,
  useReactFlow,
} from "@xyflow/react";
import { Slide } from "@/components/Slide";

import { KeyboardEventHandler, useCallback, useState } from "react";

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
      position: { x: 300, y: 0 },
      data: { source: "Second-node" },
    },
    {
      id: "2",
      type: "slide",
      position: { x: 600, y: 0 },
      data: { source: "Third-node" },
    },
  ];

  const initialSlide = "1";
  const [currentSlide, setCurrentSlide] = useState<string>(initialSlide);

  const { fitView } = useReactFlow();
  const handleNodeClick = useCallback<NodeMouseHandler>(
    (_, node) => {
      fitView({ nodes: [node], duration: 150 });
      setCurrentSlide(node.id);
    },
    [fitView]
  );

  const handleKeyPress = useCallback<KeyboardEventHandler>(
    (event) => {
      const slide = nodes.find((node) => node.id === currentSlide);

      switch (event.key) {
        case "ArrowLeft":
          {
            event.preventDefault();
            const currentID = slide?.id;
            if (currentID) {
              fitView({ nodes: [{ id: "0" }], duration: 300 });
            }
          }
          break;

        case "ArrowRight":
          {
            event.preventDefault();
            const currentID = slide?.id;
            if (currentID) {
              fitView({ nodes: [{ id: "2" }], duration: 300 });
            }
          }
          break;
      }
    },

    [fitView, currentSlide]
  );

  return (
    <>
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        fitView
        minZoom={0.1}
        fitViewOptions={{ nodes: [{ id: initialSlide }] }}
        onNodeClick={handleNodeClick}
        onKeyDown={handleKeyPress}
      >
        <Background color="#f2f2f2" variant={BackgroundVariant.Lines} />
      </ReactFlow>
    </>
  );
}
