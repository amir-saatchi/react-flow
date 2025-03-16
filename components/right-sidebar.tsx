"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Settings } from "lucide-react";
import { useStore } from "@/store/store";
import { useShallow } from "zustand/shallow";

export default function RightSidebar() {
  const { selectedNode, updateNodeData } = useStore(
    useShallow((state) => ({
      selectedNode: state.selectedNode,
      updateNodeData: state.updateNodeData,
    }))
  );

  if (!selectedNode) {
    return (
      <div className="w-64 h-full border-l bg-background">
        <Card className="border-0 shadow-none rounded-none">
          <CardHeader className="px-4 py-3">
            <CardTitle className="text-lg">Properties</CardTitle>
          </CardHeader>
          <CardContent className="px-4 py-2">
            <div className="flex flex-col items-center justify-center h-40 text-center text-muted-foreground">
              <Settings className="w-8 h-8 mb-2 opacity-50" />
              <p>Select a node to edit its properties</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-64 h-full border-l bg-background">
      <Card className="border-0 shadow-none rounded-none">
        <CardHeader className="px-4 py-3">
          <CardTitle className="text-lg">Node Properties</CardTitle>
        </CardHeader>
        <CardContent className="px-4 py-2">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="label">Label</Label>
              <Input
                id="label"
                value={selectedNode.data.label}
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
              <Label htmlFor="color">Background Color</Label>
              <div className="flex gap-2">
                <Input
                  id="color"
                  type="color"
                  value={selectedNode.data.color}
                  onChange={(e) =>
                    updateNodeData(selectedNode.id, { color: e.target.value })
                  }
                  className="w-12 h-10 p-1"
                />
                <Input
                  value={selectedNode.data.color}
                  onChange={(e) =>
                    updateNodeData(selectedNode.id, { color: e.target.value })
                  }
                  className="flex-1"
                />
              </div>
            </div>

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
      </Card>
    </div>
  );
}
