import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import { FaSpotify } from "react-icons/fa";
import { RiNetflixFill } from "react-icons/ri";

const transactions = [
  {
    icon: <FaSpotify className="w-6 h-6 text-green-600" />,
    label: "Spotify",
    method: "Bank account",
    date: "2024/04/01",
    amount: 750.0,
  },
  {
    icon: <RiNetflixFill className="w-6 h-6 text-red-600" />,
    label: "Netflix",
    method: "Credit card",
    date: "2024/03/29",
    amount: -9.9,
  },
  {
    label: "Carl Andrew",
    method: "Bank account",
    date: "2024/03/27",
    amount: 400.0,
  },
  {
    label: "Carrefour Market",
    method: "Credit card",
    date: "2024/03/26",
    amount: -64.33,
  },
];

export default function LastTransactions() {
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
          {transactions.map((txt, i) => (
            <tr
              key={i}
              className=" text-lg  rounded-md hover:bg-primary-350 transition"
            >
              <td className="px-4 py-2 font-medium text-left text-primary-500">
                {"icon" in txt ? (
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100/10 flex items-center justify-center text-xl font-bold text-primary-600">
                      {txt.icon}
                    </div>
                    <span className="text-primary-500 font-medium">
                      {txt.label}
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-200 flex items-center justify-center text-xs font-bold text-primary-600">
                      {txt.label
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .toUpperCase()}
                    </div>
                    <span className="text-primary-500 font-medium">
                      {txt.label}
                    </span>
                  </div>
                )}
              </td>
              <td className="px-4 py-2 text-left font-medium text-primary-600">
                {txt.method}
              </td>
              <td className="px-4 py-2 text-left font-medium text-primary-600">
                {txt.date}
              </td>
              <td
                className={`px-4 py-2 text-left font-medium ${
                  txt.amount > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {txt.amount > 0
                  ? `+$${txt.amount.toFixed(2)}`
                  : `-$${Math.abs(txt.amount).toFixed(2)}`}
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
