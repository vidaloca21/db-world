"use client";
import { Button } from "@/shared/components/ui/button";
import { useOverlay } from "@toss/use-overlay";
import Link from "next/link";
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

  return (
    <div>
      <h3>활동목록</h3>
      <Button variant={"lightblue"} onClick={openCreate}>
        새 활동 추가하기
      </Button>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
