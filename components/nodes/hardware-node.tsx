import { memo } from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import type { CustomNode } from "@/lib/types";
import Image from "next/image";

function HardwareNode({ data, isConnectable }: NodeProps<CustomNode>) {
  const iconPath = `/svg/special/${data.icon}.svg`;
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
        <div className="relative h-6 w-6 p-1 bg-slate-950 rounded-sm shadow">
          <Image
            src="/svg/special/CAN.svg"
            alt="svg"
            layout="fill"
            objectFit="cover"
            className=""
          />
        </div>
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

export default memo(HardwareNode);
