"use cient";
import { ReactFlowProvider } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

function FlowProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactFlowProvider>
      {children}
    </ReactFlowProvider>
  );
}

export default FlowProvider;
