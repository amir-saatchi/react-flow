import FlowScene from "@/components/ReactFlowScene";
import FlowProvider from "@/provider/ReactFlowProvider";
import React from "react";

function Main() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div>Main</div>
        <div className="w-[900px] h-[900px] bg-white">
          <FlowProvider>
            <FlowScene />
          </FlowProvider>
        </div>
      </div>
    </>
  );
}

export default Main;
