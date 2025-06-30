"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shared/components/ui/sidebar";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import Link from "next/link";

const items = [
  { title: "Home", url: "/", icon: Home },
  { title: "우리반", url: "/classroom", icon: Calendar },
  { title: "친구들", url: "/student", icon: Calendar },
  // { title: "활동", url: "/activity", icon: Calendar },
  // { title: "퀘스트", url: "#", icon: Calendar },
  // { title: "상점", url: "#", icon: Calendar },
  // { title: "아바타", url: "#", icon: Calendar },
  // { title: "뱃지", url: "#", icon: Calendar },
  // { title: "주식", url: "#", icon: Calendar },
  // { title: "Search", url: "#", icon: Search },
  // { title: "Settings", url: "#", icon: Settings },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>2025-2학기 5학년 3반</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
