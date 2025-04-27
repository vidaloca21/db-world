"use client";

import { useState } from "react";
import { Button } from "@/shared/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export function GlobalNavbar() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#c9e7db] backdrop-blur border-b border-gray-200">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-primary"
        >
          DB-WORLD
        </Link>

        <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
          <Link
            href="/classroom"
            className="hover:text-primary transition-colors"
          >
            학급관리
          </Link>
          <Link
            href="/student"
            className="hover:text-primary transition-colors"
          >
            학생상세
          </Link>
          <Link
            href="/activity"
            className="hover:text-primary transition-colors"
          >
            활동관리
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            뱃지
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            상점
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            주식
          </Link>
        </nav>

        {/* Right: Mobile Hamburger */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <SheetHeader>
                <SheetTitle className="sr-only">Navigation</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-6 text-lg font-medium">
                <Link
                  href="/"
                  onClick={handleClose}
                  className="hover:text-primary transition-colors"
                >
                  HOME
                </Link>
                <Link
                  href="/classroom"
                  onClick={handleClose}
                  className="hover:text-primary transition-colors"
                >
                  학급관리
                </Link>
                <Link
                  href="/student"
                  onClick={handleClose}
                  className="hover:text-primary transition-colors"
                >
                  학생상세
                </Link>
                <Link
                  href="/activity"
                  onClick={handleClose}
                  className="hover:text-primary transition-colors"
                >
                  활동관리
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
