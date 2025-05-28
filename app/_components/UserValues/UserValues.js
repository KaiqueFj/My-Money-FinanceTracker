import React from "react";

export default function UserValues() {
  return (
    <div className="flex flex-wrap gap-6 justify-between items-stretch w-full">
      <CardContainerOfValues value="$5.420,30" percentage="100">
        Balance
      </CardContainerOfValues>

      <CardContainerOfValues value="$2.420,30" percentage="12,5">
        Expenses
      </CardContainerOfValues>

      <CardContainerOfValues value="$1.420,30" percentage="5">
        Income
      </CardContainerOfValues>
    </div>
  );
}

function CardContainerOfValues({ children, value, percentage }) {
  return (
    <div className="flex flex-col justify-between bg-primary-100 rounded-xl shadow-lg p-6 min-w-[200px] flex-1 transition-transform hover:scale-[1.02]">
      <div className="flex flex-col gap-2">
        <p className="text-primary-600 font-semibold text-xl">{children}</p>
        <p className="text-primary-450 font-bold text-4xl">{value}</p>
      </div>

      <div className="flex justify-end mt-4">
        <p className="text-primary-600 text-lg font-medium">{`${percentage}%`}</p>
      </div>
    </div>
  );
}
