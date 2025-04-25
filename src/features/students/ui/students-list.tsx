"use client";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import { Student } from "../model/types";
import { useState } from "react";
import { StudentsListItem } from "./students-list-item";

const STUDENT_LIST: Student[] = [
  {
    index: 1,
    studentName: "만두",
    password: "1234",
    classGameBadge: "초보도전자",
    classGameLevel: 1,
    classGamexp: 10,
    classGameCP: 8,
    classGameStat: { agility: 1, intelligence: 1, luck: 1, strength: 1 },
    activeStatus: true,
  },
  {
    index: 2,
    studentName: "다크초코",
    password: "1234",
    classGameBadge: "대적자",
    classGameLevel: 1,
    classGamexp: 10,
    classGameCP: 8,
    classGameStat: { agility: 1, intelligence: 1, luck: 1, strength: 1 },
    activeStatus: true,
  },
  {
    index: 3,
    studentName: "삐혜",
    password: "1234",
    classGameBadge: "1호팬",
    classGameLevel: 1,
    classGamexp: 10,
    classGameCP: 8,
    classGameStat: { agility: 1, intelligence: 1, luck: 1, strength: 1 },
    activeStatus: true,
  },
  {
    index: 4,
    studentName: "백김치",
    password: "1234",
    classGameBadge: "사월의 편지",
    classGameLevel: 1,
    classGamexp: 10,
    classGameCP: 8,
    classGameStat: { agility: 1, intelligence: 1, luck: 1, strength: 1 },
    activeStatus: true,
  },
  {
    index: 5,
    studentName: "EUN",
    password: "1234",
    classGameBadge: "고독한 시인",
    classGameLevel: 1,
    classGamexp: 10,
    classGameCP: 8,
    classGameStat: { agility: 1, intelligence: 1, luck: 1, strength: 1 },
    activeStatus: true,
  },
];

export function StudentsList() {
  const [students] = useState(STUDENT_LIST);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>선택</TableHead>
          <TableHead className="w-[100px]">번호</TableHead>
          <TableHead>이름</TableHead>
          <TableHead>비밀번호</TableHead>
          <TableHead>뱃지</TableHead>
          <TableHead>레벨</TableHead>
          <TableHead>XP</TableHead>
          <TableHead>CP</TableHead>
          <TableHead>스탯</TableHead>
          <TableHead className="text-right">삭제</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {students &&
          students.map((student) => (
            <StudentsListItem key={student.index} data={student} />
          ))}
      </TableBody>
    </Table>
  );
}
