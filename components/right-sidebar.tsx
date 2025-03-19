"use client";

import { Card } from "@/components/ui/card";
import { StoreType, useStore } from "@/store/store";
import { useShallow } from "zustand/shallow";
import SelectNodeMessage from "./right-sidebar/SelectNodeMessage";
import SelectedNodeProperties from "./right-sidebar/SelectedNodeProperties";
import SideBarImportExport from "./right-sidebar/SideBarImportExport";

const selector = (state: StoreType) => ({
  selectedNodeId: state.selectedNodeId,
});

export default function RightSidebar() {
  const { selectedNodeId } = useStore(useShallow(selector));

  console.log("Selected Node:", selectedNodeId);

  return (
    <div className="w-64 h-full border-l bg-background">
      <Card className="border-0 shadow-none rounded-none">
        {<SideBarImportExport />}
        {!selectedNodeId && <SelectNodeMessage />}
        {selectedNodeId && <SelectedNodeProperties />}
      </Card>
    </div>
  );
}
