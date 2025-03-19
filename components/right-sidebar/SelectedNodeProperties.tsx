import React from "react";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "../ui/separator";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { StoreType, useStore } from "@/store/store";
import { useShallow } from "zustand/shallow";

const selector = (state: StoreType) => ({
  selectedNodeId: state.selectedNodeId,
  updateNodeData: state.updateNodeData,
  setParentNode: state.setParentNode,
  nodes: state.nodes,
});

function SelectedNodeProperties() {
  const { selectedNodeId, updateNodeData, nodes, setParentNode } = useStore(
    useShallow(selector)
  );

  // Filter group nodes for the parent dropdown
  const groupNodes = nodes.filter(
    (node) => node.type === "group" && node.id !== selectedNodeId
  );

  // Find Selected Node
  const selectedNode = nodes.find((node) => node.id === selectedNodeId);

  if (!selectedNode) {
    return (
      <>
        <CardHeader className="px-4 py-3">
          <CardTitle className="text-lg">Node Properties</CardTitle>
        </CardHeader>
        <CardContent className="px-4 py-2">Node Not Found</CardContent>
      </>
    );
  }

  return (
    <>
      <CardHeader className="px-4 py-3">
        <CardTitle className="text-lg">Node Properties</CardTitle>
      </CardHeader>
      <CardContent className="px-4 py-2">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="label">Label</Label>
            <Input
              id="label"
              value={selectedNode?.data.label}
              onChange={(e) =>
                updateNodeData(selectedNode.id, { label: e.target.value })
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={selectedNode.data.description}
              onChange={(e) =>
                updateNodeData(selectedNode.id, {
                  description: e.target.value,
                })
              }
              rows={4}
            />
          </div>

          <Separator />

          <div className="space-y-2">
            <Label htmlFor="parent">Parent Node</Label>
            <Select
              value={selectedNode.parentId || "none"}
              onValueChange={(value) =>
                setParentNode(selectedNode.id, value === "none" ? null : value)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="No parent" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">No parent</SelectItem>
                {groupNodes.map((node) => (
                  <SelectItem key={node.id} value={node.id}>
                    {node.data.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {/* // extra info */}
          <div className="pt-2">
            <p className="text-xs text-muted-foreground">
              Node ID: {selectedNode.id}
            </p>
            <p className="text-xs text-muted-foreground">
              Node Type: {selectedNode.type}
            </p>
          </div>
        </div>
      </CardContent>
    </>
  );
}

export default SelectedNodeProperties;
