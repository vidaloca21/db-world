import { TableCell, TableRow } from "@/shared/components/ui/table";
import { Student } from "../model/types";

interface StudentsListItemProps {
  data: Student;
}
export function StudentsListItem({ data }: StudentsListItemProps) {
  return (
    <TableRow>
      <TableCell className="font-medium">선택</TableCell>
      <TableCell>{data.index}</TableCell>
      <TableCell>{data.studentName}</TableCell>
      <TableCell>{data.password}</TableCell>
      <TableCell>{data.classGameBadge}</TableCell>
      <TableCell>{data.classGameLevel}</TableCell>
      <TableCell>{data.classGamexp}</TableCell>
      <TableCell>{data.classGameCP}</TableCell>
      <TableCell>수정</TableCell>
      <TableCell className="text-right">삭제</TableCell>
    </TableRow>
  );
}
