import { Node } from "@xyflow/react";

// Node types
export type NodeType =
  | "default"
  | "process"
  | "decision"
  | "inputOutput"
  | "group"
  | "boundary";

export type NodeData = {
  type: NodeType;
  label: string;
  description?: string;
  color?: string;
  parentId?: string; // For child nodes
};

export type CustomNode = Node<NodeData>;
