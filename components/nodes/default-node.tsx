import { memo } from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import type { CustomNode } from "@/lib/types";

function DefaultNode({ data, isConnectable }: NodeProps<CustomNode>) {
  return (
    <div
      className="px-4 py-2"
      style={{ backgroundColor: "#ffffff" }}
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

export default memo(DefaultNode);
