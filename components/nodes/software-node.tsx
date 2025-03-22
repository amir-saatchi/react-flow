import { memo } from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import type { CustomNode } from "@/lib/types";
import { iconComponents } from "../left-sidebar/IconComponents";

function SoftwareNode({ data, isConnectable }: NodeProps<CustomNode>) {
  const IconComponent = data.icon && iconComponents[data.icon];
  return (
    <div
      className="px-4 py-2 border-2 rounded-md shadow-sm border-primary/50"
      style={{
        minWidth: "120px",
      }}
    >
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
      />
      <div className="flex flex-row items-center justify-between gap-2">
        {IconComponent ? <IconComponent /> : null}
        <div className="font-medium">{data.label}</div>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
      />
    </div>
  );
}

export default memo(SoftwareNode);
