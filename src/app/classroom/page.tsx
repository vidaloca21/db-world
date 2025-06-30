"use client";
import { ClassCard } from "@/features/classroom/ui";

export default function ClassRoomView() {
  return (
    <div className="w-[800px]">
      <div className="sticky top-0 bg-white z-10 flex justify-between items-center py-2">
        <h2 className="text-xl font-semibold">우리 반 목록</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          + 새 학급
        </button>
      </div>
      <div className="flex flex-col mt-8 gap-4 w-full">
        <ClassCard
          title="2025 6학년 3반"
          date="2025.03.11."
          count="27명"
          onClick={() => console.log("카드 클릭!")}
        />
        <ClassCard
          title="2025 6학년 3반"
          date="2025.03.11."
          count="27명"
          onClick={() => console.log("카드 클릭!")}
        />
        <ClassCard
          title="2025 6학년 3반"
          date="2025.03.11."
          count="27명"
          onClick={() => console.log("카드 클릭!")}
        />
      </div>
    </div>
  );
}
