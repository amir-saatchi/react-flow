"use client";

import * as React from "react";
import { ArrowBigLeft, LucideIcon } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useStore } from "@/store/store";
import { useShallow } from "zustand/shallow";
import { ViewContent, ViewUrl } from "@/store/app-state";

export function NavSecondary({
  items,
  ...props
}: {
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
  }[];
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  const { viewUrl, viewContent, setViewUrl, setViewContent } = useStore(
    useShallow((state) => ({
      viewUrl: state.viewUrl,
      viewContent: state.viewContent,
      setViewUrl: state.setViewUrl,
      setViewContent: state.setViewContent,
    }))
  );
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem key={"back-key"}>
            <SidebarMenuButton
              onClick={() => {
                setViewUrl("DASHBOARD" as ViewUrl);
                setViewContent("DASHBOARD" as ViewContent);
              }}
            >
              <ArrowBigLeft />
              <span>back</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                onClick={() => {
                  setViewContent(item.url as ViewContent);
                }}
              >
                <item.icon />
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
