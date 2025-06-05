"use client";
import {
  insertDummyUsers,
  insertDummyCategories,
  insertDummyTransactions,
} from "@/app/_lib/send-data";

export default function InsertDevDataButton() {
  const handleInsert = async () => {
    await insertDummyUsers();
    await insertDummyCategories();
    await insertDummyTransactions();
  };

  return (
    <button
      onClick={handleInsert}
      className="px-6 py-3 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
    >
      Insert Dummy Data
    </button>
  );
}
