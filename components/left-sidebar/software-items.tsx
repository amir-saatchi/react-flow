"use client";

import { NodeItem } from "./NodeItem";

function SoftwareItems() {
  return (
    <div className="p-2 grid grid-cols-1 gap-2">
      <NodeItem type="Software" label="Key" icon="key" />
      <NodeItem type="Software" label="Software Module" icon="softwareModule" />
      <NodeItem type="Software" label="FW" icon="fw" />
      <NodeItem type="Software" label="Function" icon="function" />
      <NodeItem type="Software" label="Custom" icon="custom" />
    </div>
  );
}

export default SoftwareItems;
