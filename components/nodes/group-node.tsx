// nodes/group-node.tsx
import { memo } from "react";
import { NodeResizer, Handle, Position, type NodeProps } from "@xyflow/react";
import type { CustomNode } from "@/lib/types";

const GroupNode = ({ data, selected }: NodeProps<CustomNode>) => {
  return (
    <div className="px-4 py-2 border-2 rounded-md shadow-sm
     border-primary/50 min-w-32 min-h-48">
      <NodeResizer
        color="#ff0071"
        isVisible={selected}
        minWidth={150}
        minHeight={100}
      />
      <div>{data.label}</div>
      <Handle type="target" position={Position.Top} />
      <Handle type="target" position={Position.Left} />
      <Handle type="target" position={Position.Right} />
      <Handle type="target" position={Position.Bottom} />
    </div>
  );
};

export default memo(GroupNode);
