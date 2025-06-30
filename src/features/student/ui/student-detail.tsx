"use client";
export function StudentDetail() {
  const activityList = [
    { content: "수학여행 프로젝트 장소선정", date: "04/09" },
    { content: "너는 나의 봄 사진작가", date: "03/28" },
    { content: "가창시험을 위해 열심히 노력함.", date: "03/27" },
    { content: "1기 학생자치회 회장선거에 입후보한 멋진 용사", date: "03/21" },
    { content: "우리반을 위해 친구의 의자를 내려줌", date: "03/18" },
    { content: "멋진 시를 작성한 시인입니다.", date: "03/18" },
  ];
  return (
    <div className="flex flex-col w-full">
      <div className="my-4">
        <h1 className="font-bold text-xl">활동기록</h1>
        <ul>
          {activityList.map((item, index) => (
            <li key={index}>
              {item.content}
              <span className="text-neutral-400 ms-2">({item.date})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
