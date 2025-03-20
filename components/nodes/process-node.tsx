import { memo } from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import type { CustomNode } from "@/lib/types";

function ProcessNode({ data, isConnectable }: NodeProps<CustomNode>) {
  return (
    <div
      className="px-4 py-2 border-2 rounded-md shadow-sm border-primary/50"
      style={{
        backgroundColor:  "#ffffff",
        minWidth: "120px",
        minHeight: "60px",
      }}
    >
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <div className="font-medium">{data.label}</div>
      {data.description && (
        <div className="text-xs text-muted-foreground">{data.description}</div>
      )}
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
      />
    </div>
  );
}

export default memo(ProcessNode);
