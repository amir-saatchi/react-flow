"use client";

import * as React from "react";

import { NavDocuments } from "@/components/navbar/nav-documents";
import { NavMain } from "@/components/navbar/nav-main";
import { NavSecondary } from "@/components/navbar/nav-secondary";
import { NavUser } from "@/components/navbar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { menuData } from "@/data/menu-data";
import { useStore } from "@/store/store";
import { useShallow } from "zustand/shallow";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const {viewUrl,viewContent} = useStore(
    useShallow((state) => ({
      viewUrl: state.viewUrl,
      viewContent: state.viewContent,
    }))
  );

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="/">
                <span className="text-base font-semibold">Nord CS </span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {viewUrl === "MAIN" && <NavMain items={menuData.navMain} />}
        {viewUrl === "PROJECT" && <NavSecondary items={menuData.navProject} />}
        {/* <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={menuData.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
