"use client";
import { AppSidebar } from "@/shared/components/layout";
import {
  SidebarProvider,
  SidebarTrigger,
} from "@/shared/components/ui/sidebar";
import { MantineProvider } from "@mantine/core";
import { OverlayProvider } from "@toss/use-overlay";
import "@mantine/core/styles.css";

type LayoutProps = {
  children: React.ReactNode;
};

export function ClientLayout({ children }: LayoutProps) {
  return (
    <MantineProvider>
      <OverlayProvider>
        <SidebarProvider>
          <div className="flex h-screen w-full">
            <AppSidebar />
            <div className="flex w-full h-screen p-12">{children}</div>
            {/* <div className="flex flex-1 h-full overflow-hidden p-8"> */}
            {/* </div> */}
          </div>
        </SidebarProvider>
      </OverlayProvider>
    </MantineProvider>
  );
}
