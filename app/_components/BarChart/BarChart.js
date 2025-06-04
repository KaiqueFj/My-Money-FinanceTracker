"use client";

import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
const data = [
  {
    name: "Rent",
    uv: 400, // value
    pv: 41.5, // percent
    amt: 0, // optional (placeholder or remove if not needed)
    color: "#9e77ed", // optional if you're going to use this in Bar fill
  },
  {
    name: "Credit Card",
    uv: 300,
    pv: 21.5,
    amt: 0,
    color: "#f04438",
  },
  {
    name: "Entertainment",
    uv: 200,
    pv: 13.47,
    amt: 0,
    color: "#4e5ba6",
  },
  {
    name: "Transport",
    uv: 100,
    pv: 9.97,
    amt: 0,
    color: "#17b26a",
  },
];

const renderBarChart = (
  <BarChart
    width={500}
    height={300}
    data={data}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="pv" fill="#8884d8">
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={entry.color} />
      ))}
    </Bar>
  </BarChart>
);

export default function BarChartView() {
  return (
    <div className="flex flex-col gap-3 overflow-x-auto border-4 border-primary-200/60 rounded-lg shadow-lg w-full">
      <div className="flex flex-col items-start px-4 py-2 gap-1">
        <h2 className="text-primary-500 text-3xl font-semibold">
          Expenses by category
        </h2>
      </div>

      <div className="flex h-fit items-center justify-center w-full">
        {renderBarChart}
      </div>
    </div>
  );
}
