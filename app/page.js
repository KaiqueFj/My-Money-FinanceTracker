import ExpensesCategory from "./_components/ExpensesByCategory/ExpensesCategory";
import Filter from "./_components/Fillter/Filter";
import LastTransactions from "./_components/LastTransactions/LastTransactions";
import QuickActions from "./_components/QuickActions/QuickActions";
import UserValues from "./_components/UserValues/UserValues";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between w-full">
      <div className="flex flex-row w-full justify-between">
        <h1 className="text-primary-500 text-6xl">Hello, Kaique</h1>
        <Filter />
      </div>
      <div className="flex items-center justify-between flex-row w-full mt-20">
        <UserValues />
      </div>

      <div className="flex items-center justify-between flex-row w-full mt-20">
        <QuickActions />
      </div>

      <div className="flex flex-row justify-between items-start  w-full mt-20">
        <ExpensesCategory />
        <LastTransactions />
      </div>
    </div>
  );
}
