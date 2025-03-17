// nodes/boundary-node.tsx
import { memo } from "react";
import { type NodeProps } from "@xyflow/react";
import { CustomNode } from "@/lib/types";

const BoundaryNode = ({ data }: NodeProps<CustomNode>) => {
  return (
    <div
      className="border-dashed border-2 border-red-500 bg-gray-100 pointer-events-none w-[900px] h-[600px] z-0"

    >
        <label className="m-2">Boundary Node</label>
    </div>
  );
};

export default memo(BoundaryNode);
