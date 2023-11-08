import "./styles.css";
import React, { useCallback, useState, PureComponent } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Sector,
  Cell,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "High", value: 31 },
  { name: "Medium", value: 25 },
  { name: "Low", value: 120 }
];

const COLORS = ["#F05359", "#FFA400", "#5C946E"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
  name
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 1.35;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="black"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${name} ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function PieChartRisks() {
  return (
    <div>
      <h4>Total alerts raised</h4>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell -${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}
