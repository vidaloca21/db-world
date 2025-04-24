"use client";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export function StudentDetail() {
  const activityList = [
    { content: "수학여행 프로젝트 장소선정", date: "04/09" },
    { content: "너는 나의 봄 사진작가", date: "03/28" },
    { content: "가창시험을 위해 열심히 노력함.", date: "03/27" },
    { content: "1기 학생자치회 회장선거에 입후보한 멋진 용사", date: "03/21" },
    { content: "우리반을 위해 친구의 의자를 내려줌", date: "03/18" },
    { content: "멋진 시를 작성한 시인입니다.", date: "03/18" },
  ];
  const chartData = [
    {
      subject: "힘",
      value: 1,
    },
    {
      subject: "체력",
      value: 2,
    },
    {
      subject: "지능",
      value: 3,
    },
    {
      subject: "행운",
      value: 4,
    },
  ];
  const maxStatValue = 10;
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
      <div className="w-full max-w-[400px] aspect-square mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={chartData}>
            <PolarGrid stroke="rgba(0, 0, 0, 0.1)" />
            <PolarAngleAxis
              dataKey="subject"
              tick={{
                fill: "#666",
              }}
            />
            <Tooltip
              formatter={(value, name) => [`${value}점`, name]}
              contentStyle={{ fontFamily: "" }}
            />
            <PolarRadiusAxis
              angle={90}
              domain={[0, maxStatValue]}
              tickCount={5}
              tick={{
                fontSize: 12,
                fill: "rgba(102, 102, 102, 0.5)",
                fontFamily: "",
              }}
              stroke="rgba(0, 0, 0, 0.1)"
            />
            <Radar
              name="능력치"
              dataKey="value"
              stroke="#4a90e2"
              fill="#4a90e2"
              fillOpacity={0.3}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      <div>
        {chartData.map((item, index) => (
          <div key={index} className="flex items-center gap-2 p-1.5 rounded">
            <div className="flex items-center gap-1 w-14">
              <span className="font-medium truncate text-xs">
                {item.subject}
              </span>
            </div>
            <div className="flex-1 relative h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 transition-all duration-300"
                style={{ width: `${(item.value / maxStatValue) * 100}%` }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-xs">
                {item.value} / {maxStatValue}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
