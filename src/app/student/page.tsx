import { StudentDetail } from "@/features/students/ui";

export default function StudentPage() {
  return (
    <div className="flex flex-col w-full gap-4">
      <div>
        <h3 className="text-xl font-bold">만두</h3>
        <div>
          <ul className="flex gap-4">
            <li>
              <span className="me-2">레벨</span>
              <span>3</span>
            </li>
            <li>
              <span className="me-2">XP</span>
              <span>32/100</span>
            </li>
            <li>
              <span className="me-2">CP</span>
              <span>28</span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold">활동?</h3>
        <div>학생 활동 영역</div>
      </div>
      <StudentDetail />
    </div>
  );
}
