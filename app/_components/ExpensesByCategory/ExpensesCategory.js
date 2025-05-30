"use client";

import {
  CreditCardIcon,
  HomeIcon,
  ShoppingBagIcon,
  TruckIcon,
} from "@heroicons/react/24/solid";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Rent", value: 400, icon: HomeIcon, color: "#9e77ed", percent: 41.5 },
  {
    name: "Credit Card",
    value: 300,
    icon: CreditCardIcon,
    color: "#f04438",
    percent: 21.5,
  },
  {
    name: "Entertainment",
    value: 200,
    icon: ShoppingBagIcon,
    color: "#4e5ba6",
    percent: 13.47,
  },
  {
    name: "Transport",
    value: 100,
    icon: TruckIcon,
    color: "#17b26a",
    percent: 9.97,
  },
];

const renderPieChart = (
  <PieChart width={400} height={250}>
    <Pie
      data={data}
      cx="50%"
      cy="50%"
      outerRadius={120}
      innerRadius={65}
      dataKey="value"
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={entry.color} />
      ))}
    </Pie>
    <Tooltip />
  </PieChart>
);

export default function ExpensesCategory() {
  return (
    <div className="flex flex-col gap-3 overflow-x-auto border-4 border-primary-200/60 rounded-lg shadow-lg w-full">
      <div className="flex flex-col items-start px-4 py-2 gap-1">
        <h2 className="text-primary-500 text-3xl font-semibold">
          Expenses by category
        </h2>
      </div>

      <div className="flex h-fit items-center justify-center w-full">
        {renderPieChart}
      </div>

      <div className="flex flex-col justify-between w-full px-4 pt-2 items-center">
        {data.map((entry, index) => {
          const Icon = entry.icon;
          return (
            <div
              key={index}
              className="flex flex-row items-center border-b-4 border-primary-200/60 gap-4 py-2 justify-between w-full"
            >
              <div className="flex flex-row gap-2 items-center">
                <Icon
                  className="w-10 h-10 rounded-full p-2"
                  style={{ backgroundColor: entry.color, color: "#fff" }}
                />
                <span className="text-lg font-semibold text-primary-500">
                  {entry.name}
                </span>
              </div>
              <span className="text-primary-600 font-normal text-lg">
                {entry.percent.toFixed(1)}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
