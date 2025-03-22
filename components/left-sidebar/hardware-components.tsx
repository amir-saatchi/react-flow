"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { NodeItem } from "./NodeItem"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

function HardwareComponents() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-full border rounded-lg overflow-hidden">
      <CollapsibleTrigger className="flex items-center justify-between w-full p-3 hover:bg-accent/50 transition-colors">
        <div className="flex items-center gap-2 font-medium">
          <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 text-primary">
            {/* You can add a hardware icon here */}
          </div>
          <span className="hidden lg:inline">Hardware</span>
        </div>
        {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </CollapsibleTrigger>
      <CollapsibleContent className="border-t">
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
      </CollapsibleContent>
    </Collapsible>
  )
}

export default HardwareComponents

