import React from "react";
import { Handle, Position } from "@xyflow/react";

import { StoreState, useStore } from "@/store/store";
import { shallow } from "zustand/shallow";

interface OscProps {
  id: string;
  data: {
    frequency: number;
    type: "sine" | "triangle" | "sawtooth" | "square";
  };
}

const selector = (id: string) => (store: StoreState) => ({
  setFrequency: (event: React.ChangeEvent<HTMLInputElement>) =>
    store.updateNode(id, { frequency: +event.target.value }),
  setType: (event: React.ChangeEvent<HTMLSelectElement>) =>
    store.updateNode(id, { type: event.target.value }),
});

export default function Osc({ id, data }: OscProps) {
  const { setFrequency, setType } = useStore(selector(id), shallow);
  return (
    <div>
      <div>
        <p>Oscillator Node</p>

        <label>
          <span>Frequency</span>
          <input
            className="nodrag"
            type="range"
            min="10"
            max="1000"
            value={data.frequency}
            onChange={setFrequency}
          />
          <span>{data.frequency}Hz</span>
        </label>

        <label>
          <span>Waveform</span>
          <select className="nodrag" value={data.type} onChange={setType}>
            <option value="sine">sine</option>
            <option value="triangle">triangle</option>
            <option value="sawtooth">sawtooth</option>
            <option value="square">square</option>
          </select>
        </label>
      </div>

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
