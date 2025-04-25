"use client";
import { Button } from "@/shared/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/shared/components/ui/dialog";
import { Input } from "@/shared/components/ui/input";

interface OverlayProps {
  isOpen: boolean;
  close(): void;
  exit?(): void;
}

export function ActivityCreate({ isOpen, close }: OverlayProps) {
  return (
    <Dialog open={isOpen}>
      <DialogContent>
        <div className="flex flex-col w-full">
          <DialogHeader>
            <DialogTitle>새 활동 추가</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <h3 className="py-2">활동 내용</h3>
            <Input type="text" placeholder="활동 내용을 입력하세요" />
          </div>
          <div className="mt-4">
            <h3 className="py-2">활동 일시</h3>
            <div className="">
              <div className="flex px-2 w-60">
                <span className="min-w-16 self-center">시작일</span>
                <Input type="date" />
              </div>
              <div className="flex px-2 pt-1 w-60">
                <span className="min-w-16 self-center">종료일</span>
                <Input type="date" />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="py-2">활동 보상</h3>
            <div className="flex">
              <span className="min-w-12 self-center">힘</span>
              <Input type="number" className="w-20" />
            </div>
            <div className="flex">
              <span className="min-w-12 self-center">지능</span>
              <Input type="number" className="w-20" />
            </div>
            <div className="flex">
              <span className="min-w-12 self-center">행운</span>
              <Input type="number" className="w-20" />
            </div>
            <div className="flex">
              <span className="min-w-12 self-center">체력</span>
              <Input type="number" className="w-20" />
            </div>
            <div className="flex">
              <span className="min-w-12 self-center">XP</span>
              <Input type="number" className="w-20" />
            </div>
            <div className="flex">
              <span className="min-w-12 self-center">CP</span>
              <Input type="number" className="w-20" />
            </div>
          </div>
          {/* <ButtonLayout multi="multi"> */}
          <Button variant={"lightgray"} onClick={close}>
            취소
          </Button>
          <Button variant={"lightgreen"}>저장</Button>
          {/* </ButtonLayout> */}
        </div>
      </DialogContent>
    </Dialog>
  );
}
