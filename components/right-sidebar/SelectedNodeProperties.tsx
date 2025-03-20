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
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { AssetType, CSProperty } from "@/lib/types";
import { Checkbox } from "../ui/checkbox";

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

  const toggleCSProperty = (property: CSProperty) => {
    const currentProperties = [...selectedNode.data.csProperties];
    const index = currentProperties.indexOf(property);

    if (index > -1) {
      currentProperties.splice(index, 1);
    } else {
      currentProperties.push(property);
    }

    updateNodeData(selectedNode.id, { csProperties: [...currentProperties] });
  };

  return (
    <>
      <CardHeader className="px-4 py-3">
        <CardTitle className="text-lg">Security Properties</CardTitle>
      </CardHeader>
      <CardContent className="px-4 py-2">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-500">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Enter ..."
              className=""
              value={selectedNode?.data.name}
              onChange={(e) =>
                updateNodeData(selectedNode.id, { name: e.target.value })
              }
            />
          </div>

          <Separator className="my-4" />

          <div className="space-y-2">
            <Label className="text-gray-500">Asset:</Label>
            <RadioGroup
              value={selectedNode.data.isAsset ? "yes" : "no"}
              onValueChange={(value) =>
                updateNodeData(selectedNode.id, { isAsset: value === "yes" })
              }
              className="flex gap-8"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="yes"
                  id="asset-yes"
                />
                <Label htmlFor="asset-yes" className="text-gray-500">
                  Yes
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="asset-no" />
                <Label htmlFor="asset-no" className="text-gray-500">
                  No
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label className="text-gray-500">Asset Type:</Label>
            <RadioGroup
              value={selectedNode.data.assetType || ""}
              onValueChange={(value) =>
                updateNodeData(selectedNode.id, {
                  assetType: value as AssetType,
                })
              }
              className="flex flex-col space-y-2"
            >
              {["Software", "Hardware", "Function", "Interface", "Data"].map(
                (type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={type.toLowerCase()}
                      id={`type-${type.toLowerCase()}`}
                    />
                    <Label
                      htmlFor={`type-${type.toLowerCase()}`}
                      className="text-gray-500"
                    >
                      {type}
                    </Label>
                  </div>
                )
              )}
            </RadioGroup>
          </div>

          <Separator className="my-4" />

          <div className="space-y-2">
            <Label className="text-gray-500">CS Properties</Label>
            <div className="grid grid-cols-2 gap-y-2">
              {[
                { id: "authenticity", label: "Authenticity" },
                { id: "authorization", label: "Authorization" },
                { id: "confidentiality", label: "Confidentiality" },
                { id: "availability", label: "Availability" },
                { id: "integrity", label: "Integrity" },
                { id: "non-repudiation", label: "Non-Repudiation" },
              ].map((property) => (
                <div key={property.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={property.id}
                    checked={selectedNode.data.csProperties?.includes(
                      property.id as CSProperty
                    )}
                    onCheckedChange={() =>
                      toggleCSProperty(property.id as CSProperty)
                    }
                  />
                  <Label htmlFor={property.id} className="text-gray-500">
                    {property.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <Separator className="my-4" />

          <div className="space-y-2">
            <Label htmlFor="description" className="text-gray-500">
              Description
            </Label>
            <Textarea
              id="description"
              placeholder="Enter ..."
              className="min-h-[100px] bg-gray-500/30 placeholder:text-gray-400"
              value={selectedNode.data.description}
              onChange={(e) =>
                updateNodeData(selectedNode.id, { description: e.target.value })
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="belongTo" className="text-gray-500">
              Belong To
            </Label>
            <Input
              id="belongTo"
              placeholder="Enter ..."
              className="bg-gray-500/30 placeholder:text-gray-400"
              value={selectedNode.data.belongTo}
              onChange={(e) =>
                updateNodeData(selectedNode.id, { belongTo: e.target.value })
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="connectTo" className="text-gray-500">
              Connect To
            </Label>
            <Input
              id="connectTo"
              placeholder="Enter ..."
              className="bg-gray-500/30 placeholder:text-gray-400"
              value={selectedNode.data.connectTo}
              onChange={(e) =>
                updateNodeData(selectedNode.id, { connectTo: e.target.value })
              }
            />
          </div>

          {/* <div className="space-y-2">
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
          </div> */}

          <Separator className="my-4" />

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
