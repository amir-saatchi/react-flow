import { StoreType, useStore } from "@/store/store";
import React from "react";
import { useShallow } from "zustand/shallow";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { CardContent, CardHeader, CardTitle } from "../ui/card";

const selector = (state: StoreType) => ({
  selectedNodeId: state.selectedNodeId,
  updateNodeData: state.updateNodeData,
  setParentNode: state.setParentNode,
  nodes: state.nodes,
  exportDiagram: state.exportDiagram,
  importDiagram: state.importDiagram,
});

function SideBarImportExport() {
  const { nodes, importDiagram, exportDiagram } = useStore(
    useShallow(selector)
  );

  // Export handler
  const handleExport = () => {
    const json = exportDiagram();
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "diagram.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Import handler
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target?.result as string);
          importDiagram(data);
        } catch (error) {
          console.error("Invalid file format");
        }
      };
      reader.readAsText(file);
    }
  };
  return (
    <>
      <CardHeader>
        <CardTitle>Import / Export</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {nodes.length > 1 && <Button onClick={handleExport}>Export</Button>}
          <Input type="file" onChange={handleFileUpload} accept=".json" />
        </div>
      </CardContent>
    </>
  );
}

export default SideBarImportExport;
