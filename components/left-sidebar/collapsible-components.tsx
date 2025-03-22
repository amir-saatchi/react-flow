"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { NodeItem } from "./NodeItem";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

function CollapsibleComponents({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className="w-full rounded-lg overflow-hidden"
    >
      <CollapsibleTrigger className="flex items-center justify-between w-full p-3 hover:bg-accent/50 transition-colors">
        <div className="flex items-center gap-2 font-medium">
          <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 text-primary">
            {/* You can add a hardware icon here */}
          </div>
          <span className="hidden lg:inline">{title}</span>
        </div>
        {open ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </CollapsibleTrigger>
      <CollapsibleContent className="border-t">{children}</CollapsibleContent>
    </Collapsible>
  );
}

export default CollapsibleComponents;
