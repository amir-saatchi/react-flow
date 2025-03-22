"use client"

import type { NodeType } from "@/lib/types"
import { useStore } from "@/store/store"
import React from "react"
import { useShallow } from "zustand/shallow"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { iconComponents, IconName } from "./IconComponents"

interface NodeItemProps {
  type: NodeType
  label: string
  icon: IconName
}

export const NodeItem = React.memo(({ type, label, icon }: NodeItemProps) => {
  const { onDragStart } = useStore(useShallow((state) => ({ onDragStart: state.onDragStart })))

  return (
    <TooltipProvider>
      <div
        className="flex items-center gap-3 p-3 border rounded-md cursor-move hover:bg-accent transition-colors"
        draggable
        onDragStart={(event) => onDragStart(event, type, label, icon)}
      >
        <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 text-primary shrink-0">
          {iconComponents[icon] ? React.createElement(iconComponents[icon]) : null}
        </div>

        {/* Tooltip for medium screens and smaller */}
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="sr-only lg:not-sr-only lg:hidden">{label}</span>
          </TooltipTrigger>
          <TooltipContent side="right" className="block lg:hidden">
            {label}
          </TooltipContent>
        </Tooltip>

        {/* Label visible ONLY on large screens and up */}
        <span className="hidden lg:block">{label}</span>
      </div>
    </TooltipProvider>
  )
})

NodeItem.displayName = "NodeItem"
