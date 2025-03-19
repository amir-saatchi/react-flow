// nodes/group-node.tsx
import { memo } from "react";
import { NodeResizer, Handle, Position, type NodeProps } from "@xyflow/react";
import type { CustomNode } from "@/lib/types";

const GroupNode = ({
  data,
  selected,
  isConnectable,
}: NodeProps<CustomNode>) => {
  return (
    <div className="px-4 py-2 min-w-32 min-h-48 w-full h-full">
      <NodeResizer
        color="#ff0071"
        isVisible={selected}
        minWidth={150}
        minHeight={100}
      />
      <div>{data.label}</div>
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
      />
      <Handle
        type="target"
        position={Position.Right}
        isConnectable={isConnectable}
      />
      <Handle
        type="target"
        position={Position.Bottom}
        isConnectable={isConnectable}
      />
    </div>
  );
};

export default memo(GroupNode);
