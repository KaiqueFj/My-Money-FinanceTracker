import { getTransactions } from "@/app/_lib/data-service";
import { formatCurrency, formatDate } from "@/app/utils/formatValues";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";

export default async function LastTransactions() {
  const transactionsDB = await getTransactions();

  return (
    <div className=" flex flex-col gap-6 overflow-x-auto  border-4 border-primary-200/60 rounded-lg shadow-lg w-full">
      <div className="flex flex-col items-start  px-4 py-4 gap-2">
        <h2 className="text-primary-500 text-3xl font-semibold ">
          Last transactions
        </h2>
        <span className="text-primary-600 text-lg font-regular">
          Check your last transactions
        </span>
      </div>

      <table className="min-w-full text-sm">
        <thead className="text-lg  bg-primary-200">
          <tr>
            <th className="px-4 py-3 font-medium text-left text-primary-600">
              Description
            </th>
            <th className="px-4 py-3 font-medium  text-left text-primary-600">
              Method
            </th>
            <th className="px-4 py-3 font-medium  text-left text-primary-600">
              Date
            </th>
            <th className="px-4 py-3 font-medium  text-left text-primary-600">
              Amount
            </th>
            <th className="px-4 py-3 font-medium  text-left text-primary-600"></th>
          </tr>
        </thead>
        <tbody>
          {transactionsDB.map((txt, i) => (
            <tr
              key={i}
              className=" text-lg  rounded-md hover:bg-primary-350 transition"
            >
              <td className="px-4 py-2 font-medium text-left text-primary-500">
                {txt.note}
              </td>
              <td className="px-4 py-2 text-left font-medium text-primary-600">
                {txt.method}
              </td>
              <td className="px-4 py-2 text-left font-medium text-primary-600">
                {formatDate(txt.date)}
              </td>
              <td
                className={`px-4 py-2 text-left font-medium ${
                  txt.type === "income" ? "text-green-600" : "text-red-600"
                }`}
              >
                {txt.type === "income"
                  ? `+${formatCurrency(txt.amount)}`
                  : `-${formatCurrency(txt.amount)}`}
              </td>

              <td className="px-4 py-2  text-left ">
                <button className="font-medium w-6 h-6  text-primary-600">
                  <EllipsisVerticalIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
