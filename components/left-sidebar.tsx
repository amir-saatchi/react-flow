"use client";

import React from "react";
import type { NodeType } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Square, Triangle, FileText, Container } from "lucide-react";
import { useStore } from "@/store/store";
import { useShallow } from "zustand/shallow";
import { ModeToggle } from "./mode-toggle";

interface NodeItemProps {
  type: NodeType;
  label: string;
  icon: React.ReactNode;
}

const NodeItem = React.memo(({ type, label, icon }: NodeItemProps) => {
  const { onDragStart } = useStore(
    useShallow((state) => ({ onDragStart: state.onDragStart }))
  );
  return (
    <div
      className="flex items-center gap-3 p-3 mb-2 border rounded-md cursor-move hover:bg-accent"
      draggable
      onDragStart={(event) => onDragStart(event, type, label)}
    >
      <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 text-primary">
        {icon}
      </div>
      <span>{label}</span>
    </div>
  );
});

const LeftSidebar = React.memo(() => {
  return (
    <div className="w-64 h-full border-r bg-background">
      <Card className="border-0 shadow-none rounded-none">
        <CardHeader className="px-4 py-3">
          <CardTitle className="text-lg">Node Types</CardTitle>
          <ModeToggle />
        </CardHeader>
        <CardContent className="px-4 py-2">
          <p className="mb-4 text-sm text-muted-foreground">
            Drag and drop nodes onto the canvas
          </p>
          <NodeItem
            type="default"
            label="Default"
            icon={<Square className="w-5 h-5" />}
          />
          <NodeItem
            type="process"
            label="Process"
            icon={<Square className="w-5 h-5" />}
          />
          <NodeItem
            type="decision"
            label="Decision"
            icon={<Triangle className="w-5 h-5" />}
          />
          <NodeItem
            type="inputOutput"
            label="Input/Output"
            icon={<FileText className="w-5 h-5" />}
          />
          <NodeItem
            type="group"
            label="Container"
            icon={<Container className="w-5 h-5" />}
          />
        </CardContent>
      </Card>
    </div>
  );
});

export default LeftSidebar;