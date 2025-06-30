"use client";
import { cn } from "@/shared/components/lib/utils";

export function ClassCard({
  title,
  date,
  count,
  onClick,
}: {
  title: string;
  date: string;
  count: string;
  onClick?: () => void;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-between w-full",
        "border border-black rounded-md p-4",
        "cursor-pointer hover:bg-gray-100 transition-colors duration-150"
      )}
      onClick={onClick}
    >
      <div className="flex flex-col">
        <p className="text-lg font-medium">{title}</p>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
      <p className="text-xl font-bold leading-none">{count}</p>
    </div>
  );
}
