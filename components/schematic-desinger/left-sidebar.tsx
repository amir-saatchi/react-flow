"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import HardwareComponents from "../left-sidebar/hardware-components";
import { cn } from "@/lib/utils";

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
        <CardHeader className="px-4 py-3">
          <CardTitle className="text-lg text-center lg:text-left">
            <span className="hidden lg:inline">Node Types</span>
            <span className="inline lg:hidden">Nodes</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="px-4 py-2">
          <p className="mb-4 text-sm text-muted-foreground hidden lg:block">
            Drag and drop nodes onto the canvas
          </p>
          <HardwareComponents />
        </CardContent>
      </Card>
    </div>
  );
});

LeftSidebar.displayName = "LeftSidebar";

export default LeftSidebar;
