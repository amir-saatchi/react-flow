import { Node } from "@xyflow/react";

// Node types
export type NodeType = "default" | "process" | "decision" | "inputOutput";

export type NodeData = Node<{
  type: NodeType; // Add the type property
  label: string;
  description?: string; // Make description optional
  color?: string; // Make color optional
}>;