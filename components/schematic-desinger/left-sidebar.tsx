"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CollapsibleComponents from "../left-sidebar/collapsible-components";
import HardwareItems from "../left-sidebar/hardware-items";
import SoftwareItems from "../left-sidebar/software-items";

interface LeftSidebarProps {
  className?: string;
}

const LeftSidebar = React.memo(({ className }: LeftSidebarProps) => {
  return (
    <div
      className="border-r bg-background overflow-scroll no-scrollbar transition-all duration-200 
      w-28 lg:w-64" // Narrow on small/medium, wider on large+
    >
      <Card className="border-0 shadow-none rounded-none">
        <CardHeader className="px-4 py-1">
          <CardTitle className="text-lg text-center lg:text-left">
            <span className="hidden lg:inline">Node Types</span>
            <span className="inline lg:hidden">Nodes</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="px-1 py-2">
          <p className="mb-4 text-sm text-muted-foreground hidden lg:block">
            Drag and drop nodes onto the canvas
          </p>
          <CollapsibleComponents title="Hardware">
            <HardwareItems />
          </CollapsibleComponents>
          <CollapsibleComponents title="Software">
            <SoftwareItems />
          </CollapsibleComponents>
        </CardContent>
      </Card>
    </div>
  );
});

LeftSidebar.displayName = "LeftSidebar";

export default LeftSidebar;
