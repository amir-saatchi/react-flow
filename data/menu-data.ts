import {
  ArrowUpCircleIcon,
  BarChartIcon,
  CameraIcon,
  ClipboardListIcon,
  DatabaseIcon,
  FileCodeIcon,
  FileIcon,
  FileTextIcon,
  FolderIcon,
  HelpCircleIcon,
  LayoutDashboardIcon,
  ListIcon,
  SearchIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react";

export const menuData = {
    user: {
      name: "nordCs",
      email: "user@nordcs.com",
      avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
      {
        title: "Dashboard",
        url: "#",
        icon: LayoutDashboardIcon,
      },
      {
        title: "project",
        url: "PROJECT",
        icon: ListIcon,
      },
      {
        title: "Analytics",
        url: "#",
        icon: BarChartIcon,
      },
      {
        title: "Projects",
        url: "#",
        icon: FolderIcon,
      },
      {
        title: "Team",
        url: "#",
        icon: UsersIcon,
      },
    ],
    navProject: [
      {
        title: "Schematic Design",
        url: "SCHEMATIC",
        icon: ListIcon,
      },
      {
        title: "Damage",
        url: "#",
        icon: ListIcon,
      },
    ],
    navClouds: [
      {
        title: "Capture",
        icon: CameraIcon,
        isActive: true,
        url: "#",
        items: [
          {
            title: "Active Proposals",
            url: "#",
          },
          {
            title: "Archived",
            url: "#",
          },
        ],
      },
      {
        title: "Proposal",
        icon: FileTextIcon,
        url: "#",
        items: [
          {
            title: "Active Proposals",
            url: "#",
          },
          {
            title: "Archived",
            url: "#",
          },
        ],
      },
      {
        title: "Prompts",
        icon: FileCodeIcon,
        url: "#",
        items: [
          {
            title: "Active Proposals",
            url: "#",
          },
          {
            title: "Archived",
            url: "#",
          },
        ],
      },
    ],
    navSecondary: [
      {
        title: "Settings",
        url: "#",
        icon: SettingsIcon,
      },
      {
        title: "Get Help",
        url: "#",
        icon: HelpCircleIcon,
      },
      {
        title: "Search",
        url: "#",
        icon: SearchIcon,
      },
    ],
    documents: [
      {
        name: "Data Library",
        url: "#",
        icon: DatabaseIcon,
      },
      {
        name: "Reports",
        url: "#",
        icon: ClipboardListIcon,
      },
      {
        name: "Word Assistant",
        url: "#",
        icon: FileIcon,
      },
    ],
  };