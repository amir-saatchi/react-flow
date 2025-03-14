"use client";

import React, { useState } from "react";

function SoundApp() {
  const [context, setContext] = useState<AudioContext | null>(null);
  const [osc, setOsc] = useState<OscillatorNode | null>(null);
  const [amp, setAmp] = useState<GainNode | null>(null);

  const initializeAudio = () => {
    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start();

    setContext(audioContext);
    setOsc(oscillator);
    setAmp(gainNode);
  };

  const updateValues = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!context || !osc || !amp) return;

    const freq = (e.clientX / window.innerWidth) * 1000;
    const gain = e.clientY / window.innerHeight;

    osc.frequency.value = freq;
    amp.gain.value = gain;
  };

  const toggleAudio = () => {
    if (!context) {
      console.log("Initialize audio on first click");
      initializeAudio(); // Initialize audio on first click
      return;
    }

    if (context.state === "suspended") {
      context.resume().then(() => {
        console.log("AudioContext resumed");
      });
    } else {
      context.suspend().then(() => {
        console.log("AudioContext stopped");
      });
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-400">
      <div
        className="h-[300px] w-[400px] bg-slate-50"
        onMouseMove={updateValues}
        onClick={toggleAudio}
      />
    </div>
  );
}

export default SoundApp;
