import { memo } from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import type { CustomNode } from "@/lib/types";

function InputOutputNode({ data, isConnectable }: NodeProps<CustomNode>) {
  return (
    <div
      className="relative px-4 py-2 border-2 shadow-sm border-primary/50"
      style={{
        backgroundColor: data.color || "#ffffff",
        minWidth: "140px",
        minHeight: "60px",
        transform: "skewX(-20deg)",
      }}
    >
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
        style={{ transform: "skewX(20deg)" }}
      />
      <div style={{ transform: "skewX(20deg)" }}>
        <div className="font-medium">{data.label}</div>
        {data.description && (
          <div className="text-xs text-muted-foreground">
            {data.description}
          </div>
        )}
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
        style={{ transform: "skewX(20deg)" }}
      />
    </div>
  );
}

export default memo(InputOutputNode);
