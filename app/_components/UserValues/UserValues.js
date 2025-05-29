import React from "react";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/solid";

const valueCards = [
  { label: "Balance", value: "$5.420,30", percentage: "100" },
  { label: "Expenses", value: "$2.420,30", percentage: "12,5" },
  { label: "Income", value: "$1.420,30", percentage: "-5" },
];

export default function UserValues() {
  return (
    <div className="flex flex-wrap gap-6 justify-between items-stretch w-full">
      {valueCards.map(({ label, value, percentage }) => (
        <CardContainerOfValues
          key={label}
          value={value}
          percentage={percentage}
        >
          {label}
        </CardContainerOfValues>
      ))}
    </div>
  );
}

function CardContainerOfValues({ children, value, percentage }) {
  const numericPercentage = parseFloat(percentage.replace(",", "."));
  const isPositive = numericPercentage >= 0;

  const Icon = isPositive ? ArrowUpIcon : ArrowDownIcon;
  const iconColor = isPositive ? "text-green-400" : "text-red-400";

  return (
    <div className="flex flex-col justify-between bg-primary-100 rounded-xl shadow-lg p-6 min-w-[200px] flex-1 transition-transform hover:scale-[1.02]">
      <div className="flex flex-col gap-2">
        <p className="text-primary-600 font-semibold text-xl">{children}</p>
        <p className="text-primary-450 font-bold text-4xl">{value}</p>
      </div>

      <div className="flex justify-end mt-4">
        <p className="text-primary-600 text-lg font-medium min-w-[70px] rounded-md px-2 py-1 border border-primary-250/40 flex items-center gap-1">
          <Icon className={`w-5 h-5 ${iconColor}`} />
          {`${Math.abs(numericPercentage)}%`}
        </p>
      </div>
    </div>
  );
}
