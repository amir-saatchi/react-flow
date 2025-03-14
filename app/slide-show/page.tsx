import FlowScene from "@/components/ReactFlowScene";
import FlowProvider from "@/provider/ReactFlowProvider";
import React from "react";

function SlideShow() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-slate-300">
        <div className="text-3xl">React Flow</div>
        <div className="w-[900px] h-[600px] bg-white border-2">
          <FlowProvider>
            <FlowScene />
          </FlowProvider>
        </div>
      </div>
    </>
  );
}

export default SlideShow;
