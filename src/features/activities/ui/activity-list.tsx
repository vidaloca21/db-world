"use client";
import { Button } from "@/shared/components/ui/button";
import { useOverlay } from "@toss/use-overlay";
import { ActivityCreate } from "./activity-create";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/ui/accordion";

export function ActivityList() {
  const overlay = useOverlay();
  const openCreate = () => {
    return overlay.open(({ isOpen, close }) => (
      <ActivityCreate isOpen={isOpen} close={close} />
    ));
  };

  const activityList = [
    { content: "수학여행 프로젝트 장소선정", date: "04/09" },
    { content: "너는 나의 봄 사진작가", date: "03/28" },
    { content: "가창시험을 위해 열심히 노력함.", date: "03/27" },
    { content: "1기 학생자치회 회장선거에 입후보한 멋진 용사", date: "03/21" },
    { content: "우리반을 위해 친구의 의자를 내려줌", date: "03/18" },
    { content: "멋진 시를 작성한 시인입니다.", date: "03/18" },
  ];

  return (
    <div>
      <h3>활동목록</h3>
      <Button variant={"lightblue"} onClick={openCreate}>
        새 활동 추가하기
      </Button>
      <Accordion type="single" collapsible className="w-full">
        {activityList.map((item, index) => (
          <AccordionItem key={`item-${index}`} value={`item-${index}`}>
            <AccordionTrigger className="font-bold">
              {item.content} {item.date}
            </AccordionTrigger>
            <AccordionContent>
              {item.content} {item.date}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
