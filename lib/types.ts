import { IconName } from "@/components/left-sidebar/IconComponents";
import { Node } from "@xyflow/react";

// Node types
export type NodeType = "Software" | "Hardware" | "default" | "group";

export type AssetType =
  | "software"
  | "hardware"
  | "function"
  | "interface"
  | "data";

export type CSProperty =
  | "authenticity"
  | "authorization"
  | "confidentiality"
  | "availability"
  | "integrity"
  | "non-repudiation";

export type NodeData = {
  type: NodeType;
  label: string;
  name: string;
  isAsset: boolean;
  assetType?: AssetType;
  csProperties: CSProperty[];
  description: string;
  belongTo: string;
  connectTo: string;
  parentId?: string; // For child nodes

  icon: IconName | null;
};

export type CustomNode = Node<NodeData>;
