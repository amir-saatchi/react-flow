import BlockDiagramEditor from "@/components/schematic-desinger/block-diagram-editor";
import { ReactFlowProvider } from "@xyflow/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <ReactFlowProvider>
        <BlockDiagramEditor />
      </ReactFlowProvider>
    </main>
  );
}
