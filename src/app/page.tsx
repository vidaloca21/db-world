import { StudentsList } from "@/features/students/ui";
import { Button } from "@/shared/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Image src="/images/koala.jpg" alt="koala" width={160} height={120} />
      <Button className="bg-(--custom-green) w-30 h-10">색상표</Button>
      <Button className="bg-(--custom-blue) w-30 h-10">색상표</Button>
      <Button className="bg-(--custom-pink) w-30 h-10">색상표</Button>
      <Button className="bg-(--custom-black) w-30 h-10">색상표</Button>
      <StudentsList />
    </div>
  );
}
//40097282 만두 1234
