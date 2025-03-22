"use client";

import { NodeItem } from "./NodeItem";

function HardwareItems() {
  return (
    <div className="p-2 grid grid-cols-1 gap-2">
      <NodeItem type="Hardware" label="USB" icon="usb" />
      <NodeItem type="Hardware" label="WIFI" icon="wifi" />
      <NodeItem type="Hardware" label="BlueTooth" icon="bluetooth" />
      <NodeItem type="Hardware" label="MicroController" icon="microControler" />
      <NodeItem type="Hardware" label="Interface" icon="interface" />
      <NodeItem type="Hardware" label="Ethernet" icon="ethernet" />
      <NodeItem type="Hardware" label="Ethernet Switch" icon="ethernetSwitch" />
      <NodeItem type="Hardware" label="Can" icon="can" />
      <NodeItem type="Hardware" label="Can Switch" icon="canSwitch" />
      <NodeItem type="Hardware" label="Jtag" icon="jtag" />
      <NodeItem type="Hardware" label="Serial Port" icon="serialPort" />
      <NodeItem type="Hardware" label="Gpio" icon="gpioComponent" />
      <NodeItem type="Hardware" label="HSM" icon="hsm" />
      <NodeItem type="Hardware" label="Memory" icon="memory" />
      <NodeItem type="Hardware" label="Custom" icon="custom" />
    </div>
  );
}

export default HardwareItems;
