"use client";

function SoundApp() {
  const context = new AudioContext();
  const osc = context.createOscillator();
  const amp = context.createGain();

  osc.connect(amp);
  amp.connect(context.destination);

  osc.start();

  const updateValues = (e) => {
    const freq = (e.clientX / window.innerWidth) * 1000;
    const gain = e.clientY / window.innerHeight;

    osc.frequency.value = freq;
    amp.gain.value = gain;
  };

  return (
    <div
      className="h-dvh w-dvw"
      onMouseMove={updateValues}
    />
  );
}

export default SoundApp;
