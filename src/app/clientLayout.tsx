"use client";
import { OverlayProvider } from "@toss/use-overlay";
type LayoutProps = {
  children: React.ReactNode;
};
export function ClientLayout({ children }: LayoutProps) {
  return <OverlayProvider>{children}</OverlayProvider>;
}
