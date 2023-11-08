import "./styles.css";
import React, { useCallback, useState, PureComponent } from "react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "January",
    High: 3,
    Medium: 2,
    Low: 1
  },
  {
    name: "February",
    High: 5,
    Medium: 1,
    Low: 16
  },
  {
    name: "March",
    High: 27,
    Medium: 22,
    Low: 15
  },
  {
    name: "April",
    High: 44,
    Medium: 23,
    Low: 16
  },
  {
    name: "May",
    High: 15,
    Medium: 11,
    Low: 11
  },
  {
    name: "June",
    High: 14,
    Medium: 40,
    Low: 17
  }
];

const COLORS = ["#F05359", "#FFA400", "#5C946E"];

export default function BarChartMonths() {
  return (
    <div>
      <h4>Alerts raised by month</h4>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="High" stackId="a" fill="#F05359" />
        <Bar dataKey="Medium" stackId="a" fill="#FFA400" />
        <Bar dataKey="Low" stackId="a" fill="#5C946E" />
      </BarChart>
    </div>
  );
}
