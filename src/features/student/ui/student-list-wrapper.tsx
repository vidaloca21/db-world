"use client";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";

interface ListWrapperProps {
  list: any[];
  selectedItem: any;
  setSelectedItem(item: any): void;
}

export function StudentListWrapper({
  list,
  selectedItem,
  setSelectedItem,
}: ListWrapperProps) {
  return (
    <div className="min-w-[12rem] basis-[16rem] md:basis-[20rem] border-r p-4">
      <div className="flex items-center justify-between mb-4">
        <Input placeholder="Search..." className="w-full" />
        <Button className="ml-2">검색</Button>
      </div>
      <ul className="space-y-2">
        {list.map((item) => (
          <li
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className={`p-2 rounded cursor-pointer hover:bg-gray-100 ${
              selectedItem.id === item.id ? "bg-gray-200" : ""
            }`}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
