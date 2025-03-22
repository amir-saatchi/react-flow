// iconComponents.ts
import AligncenterIcon from "@/components/svg-components/special/AligncenterIcon";
import AlignleftIcon from "@/components/svg-components/special/AlignleftIcon";
import AlignrightIcon from "@/components/svg-components/special/AlignrightIcon";
import ArrowIcon from "@/components/svg-components/special/ArrowIcon";
import BoldIcon from "@/components/svg-components/special/BoldIcon";
import BulletlistIcon from "@/components/svg-components/special/BulletlistIcon";
import CanIcon from "@/components/svg-components/special/CanIcon";
import CanswitchIcon from "@/components/svg-components/special/CanswitchIcon";
import CheksquareIcon from "@/components/svg-components/special/CheksquareIcon";
import ColorpickerIcon from "@/components/svg-components/special/ColorpickerIcon";
import CustomIcon from "@/components/svg-components/special/CustomIcon";
import DirectiondownIcon from "@/components/svg-components/special/DirectiondownIcon";
import DividerIcon from "@/components/svg-components/special/DividerIcon";
import EditIcon from "@/components/svg-components/special/EditIcon";
import EthernetIcon from "@/components/svg-components/special/EthernetIcon";
import EthernetswitchIcon from "@/components/svg-components/special/EthernetswitchIcon";
import FilecheckIcon from "@/components/svg-components/special/FilecheckIcon";
import FileminusIcon from "@/components/svg-components/special/FileminusIcon";
import FilesearchIcon from "@/components/svg-components/special/FilesearchIcon";
import FontIcon from "@/components/svg-components/special/FontIcon";
import FunctionIcon from "@/components/svg-components/special/FunctionIcon";
import FwIcon from "@/components/svg-components/special/FwIcon";
import GpiocomponentIcon from "@/components/svg-components/special/GpiocomponentIcon";
import HsmIcon from "@/components/svg-components/special/HsmIcon";
import IndentleftIcon from "@/components/svg-components/special/IndentleftIcon";
import IndentrightIcon from "@/components/svg-components/special/IndentrightIcon";
import InterfaceIcon from "@/components/svg-components/special/InterfaceIcon";
import JtagIcon from "@/components/svg-components/special/JtagIcon";
import KeyIcon from "@/components/svg-components/special/KeyIcon";
import LifebuoyIcon from "@/components/svg-components/special/LifebuoyIcon";
import LinkIcon from "@/components/svg-components/special/LinkIcon";
import MemoryIcon from "@/components/svg-components/special/MemoryIcon";
import MentionIcon from "@/components/svg-components/special/MentionIcon";
import MicrocontrolerIcon from "@/components/svg-components/special/MicrocontrolerIcon";
import NumberslistIcon from "@/components/svg-components/special/NumberslistIcon";
import PaletteIcon from "@/components/svg-components/special/PaletteIcon";
import Property1logoutIcon from "@/components/svg-components/special/Property1logoutIcon";
import Property1offIcon from "@/components/svg-components/special/Property1offIcon";
import Property1unselectIcon from "@/components/svg-components/special/Property1unselectIcon";
import SerialportIcon from "@/components/svg-components/special/SerialportIcon";
import ShieldoffIcon from "@/components/svg-components/special/ShieldoffIcon";
import ShieldzapIcon from "@/components/svg-components/special/ShieldzapIcon";
import SizelargeIcon from "@/components/svg-components/special/SizelargeIcon";
import SotwaremoduleIcon from "@/components/svg-components/special/SotwaremoduleIcon";
import UsbIcon from "@/components/svg-components/special/UsbIcon";
import WifiIcon from "@/components/svg-components/special/WifiIcon";
import BluetoothIcon from "../svg-components/general/BluetoothIcon";

export const iconComponents = {
  //hardware
  usb: UsbIcon,
  wifi: WifiIcon,
  microControler: MicrocontrolerIcon,
  bluetooth: BluetoothIcon,
  interface: InterfaceIcon,
  ethernet: EthernetIcon,
  ethernetSwitch: EthernetswitchIcon,
  can: CanIcon,
  canSwitch: CanswitchIcon,
  jtag: JtagIcon,
  serialPort: SerialportIcon,
  gpioComponent: GpiocomponentIcon,
  hsm: HsmIcon,
  memory: MemoryIcon,
  custom: CustomIcon,
  //software
  key:KeyIcon,
  softwareModule:SotwaremoduleIcon,
  fw:FwIcon,
  function:FunctionIcon,
};

export type IconName = keyof typeof iconComponents; // Export the type for icon names
