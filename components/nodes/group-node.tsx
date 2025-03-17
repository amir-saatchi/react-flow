// nodes/group-node.tsx
import { memo } from "react";
import { NodeResizer, Handle, Position, type NodeProps } from "@xyflow/react";
import type { CustomNode } from "@/lib/types";

const GroupNode = ({ data, selected }: NodeProps<CustomNode>) => {
  return (
    <>
      <NodeResizer
        color="#ff0071"
        isVisible={selected}
        minWidth={200}
        minHeight={200}
      />
      <Handle type="target" position={Position.Top} />
      <Handle type="target" position={Position.Left} />
      <div
        style={{
          padding: 10,
          backgroundColor: data.color || "#ffffff",
          border: "2px dashed #000",
          borderRadius: 4,
          width: "100%",
          height: "100%",
        }}
      >
        {data.label}
      </div>
      <Handle type="target" position={Position.Right} />
      <Handle type="target" position={Position.Bottom} />
    </>
  );
};

export default memo(GroupNode);
