import ExpensesCategory from "../_components/ExpensesByCategory/ExpensesCategory";
import Filter from "../_components/Fillter/Filter";
import BarChartView from "../_components/BarChart/BarChart";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between w-full">
      <div className="flex flex-row w-full justify-end">
        <Filter />
      </div>

      <div className="flex flex-row justify-between gap-4 items-start  w-full mt-20">
        <ExpensesCategory />
        <BarChartView />
      </div>
    </div>
  );
}
