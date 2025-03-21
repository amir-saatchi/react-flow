"use client";

import { AppSidebar } from "@/components/app-sidebar/app-sidebar";
import BlockDiagramEditor from "@/components/schematic-desinger/block-diagram-editor";
// import { ChartAreaInteractive } from "@/components/chart-area-interactive"
// import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { useStore } from "@/store/store";
import { ReactFlowProvider } from "@xyflow/react";
import { useShallow } from "zustand/shallow";

// import data from "./data.json"

export default function MainPage() {
  const { viewUrl, viewContent } = useStore(
    useShallow((state) => ({
      viewUrl: state.viewUrl,
      viewContent: state.viewContent,
    }))
  );
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            {viewContent === "DASHBOARD" && (
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                <SectionCards />
                <div className="px-4 lg:px-6"></div>
              </div>
            )}
            {viewContent === "SCHEMATIC" && (
              <ReactFlowProvider>
                <BlockDiagramEditor />
              </ReactFlowProvider>
            )}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
