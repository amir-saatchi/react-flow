import { memo } from "react"
import { Handle, Position, type NodeProps } from "@xyflow/react"
import type { NodeData } from "@/lib/types"

function DecisionNode({ data, isConnectable }: NodeProps<NodeData>) {
  return (
    <div className="flex items-center justify-center w-32 h-32 shadow-sm" style={{ transform: "rotate(45deg)" }}>
      <div className="w-full h-full border-2 border-primary/50" style={{ backgroundColor: data.color || "#ffffff" }} />
      <div
        className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center"
        style={{ transform: "rotate(-45deg)" }}
      >
        <div className="font-medium">{data.label}</div>
        {data.description && <div className="text-xs text-muted-foreground">{data.description}</div>}
      </div>
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
        style={{ transform: "rotate(-45deg)", top: "-10px" }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
        style={{ transform: "rotate(-45deg)", bottom: "-10px" }}
      />
      <Handle
        type="source"
        position={Position.Left}
        id="left"
        isConnectable={isConnectable}
        style={{ transform: "rotate(-45deg)", left: "-10px" }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="right"
        isConnectable={isConnectable}
        style={{ transform: "rotate(-45deg)", right: "-10px" }}
      />
    </div>
  )
}

export default memo(DecisionNode)

