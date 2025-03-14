import ReactFlowSound from "@/components/ReactFlowSound";
import { ReactFlowProvider } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

function SoundMainApp() {
  return (
    <>
      {/* React flow needs to be inside an element with a known height and width to work */}
      <div style={{ width: "100vw", height: "100vh" }}>
        <div>SoundApp</div>
        <ReactFlowProvider>
          <ReactFlowSound />
        </ReactFlowProvider>
      </div>
    </>
  );
}

export default SoundMainApp;
