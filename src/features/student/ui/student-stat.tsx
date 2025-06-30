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

export function StudentStat() {
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
