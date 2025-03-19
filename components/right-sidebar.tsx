"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Settings } from "lucide-react";
import { StoreType, useStore } from "@/store/store";
import { useShallow } from "zustand/shallow";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import SelectNodeMessage from "./right-sidebar/SelectNodeMessage";
import SelectedNodeProperties from "./right-sidebar/SelectedNodeProperties";
import SideBarImportExport from "./right-sidebar/SideBarImportExport";

const selector = (state: StoreType) => ({
  selectedNodeId: state.selectedNodeId,
  updateNodeData: state.updateNodeData,
  setParentNode: state.setParentNode,
  nodes: state.nodes,
  exportDiagram: state.exportDiagram,
  importDiagram: state.importDiagram,
});

export default function RightSidebar() {
  const { selectedNodeId, updateNodeData, nodes, setParentNode } = useStore(
    useShallow(selector)
  );

  const selectedNode = nodes.find((node) => node.id === selectedNodeId);

  console.log("Selected Node:", selectedNodeId);

  // Filter group nodes for the parent dropdown
  const groupNodes = nodes.filter(
    (node) => node.type === "group" && node.id !== selectedNodeId
  );

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
