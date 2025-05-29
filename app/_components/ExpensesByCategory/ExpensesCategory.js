"use client";

import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const data = [
  { name: "Rent", value: 400 },
  { name: "Groceries", value: 300 },
  { name: "Entertainment", value: 200 },
  { name: "Transport", value: 100 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const renderPieChart = (
  <PieChart width={400} height={400}>
    <Pie
      data={data}
      cx="50%"
      cy="50%"
      labelLine={false}
      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
      outerRadius={120}
      fill="#8884d8"
      dataKey="value"
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip />
    <Legend />
  </PieChart>
);

export default function ExpensesCategory() {
  return (
    <div className=" flex flex-col gap-6 overflow-x-auto border-2 border-primary-100/50 rounded-lg shadow-lg w-full">
      <div className="flex flex-col items-start  px-4 py-4 gap-2">
        <h2 className="text-primary-600 text-3xl font-semibold ">
          Expenses by category
        </h2>
      </div>
      {renderPieChart}
    </div>
  );
}
