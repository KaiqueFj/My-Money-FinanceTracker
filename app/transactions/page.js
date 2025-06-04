import ExpensesCategory from "../_components/ExpensesByCategory/ExpensesCategory";
import Filter from "../_components/Fillter/Filter";
import LastTransactions from "../_components/LastTransactions/LastTransactions";
import UserValues from "../_components/UserValues/UserValues";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between w-full">
      <div className="flex flex-row w-full justify-end">
        <Filter />
      </div>
      <div className="flex items-center justify-between flex-row w-full mt-20">
        <UserValues />
      </div>

      <div className="flex flex-row justify-between gap-4 items-start  w-full mt-20">
        <ExpensesCategory />
        <LastTransactions />
      </div>
    </div>
  );
}
