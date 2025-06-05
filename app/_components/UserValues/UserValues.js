import React from "react";
import { getTransactions } from "@/app/_lib/data-service";

export default async function UserValues() {
  const transactions = await getTransactions();
  const income = calculateBalance(transactions, "income");
  const expenses = calculateBalance(transactions, "expense");
  const balance = income - expenses;

  return (
    <div className="flex flex-wrap gap-6 justify-between items-stretch w-full">
      <CardContainerOfValues type="Balance" value={balance} />
      <CardContainerOfValues type="Income" value={income} />
      <CardContainerOfValues type="Expenses" value={expenses} />
    </div>
  );
}

function calculateBalance(t, type) {
  return t
    .filter((t) => t.type === type)
    .reduce((acc, transaction) => acc + Number(transaction.amount), 0);
}

function formatCurrency(value) {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
}

function CardContainerOfValues({ type, value }) {
  return (
    <div className="flex flex-col justify-between bg-primary-50/10 border-4 border-primary-200/60 rounded-2xl  p-6 min-w-[200px] flex-1 transition-transform hover:scale-[1.02]">
      <div className="flex flex-col gap-2">
        <p className="text-primary-600 font-semibold text-lg">{type}</p>
        <p className="text-primary-500 font-bold text-5xl">
          {formatCurrency(value)}
        </p>
      </div>
    </div>
  );
}
