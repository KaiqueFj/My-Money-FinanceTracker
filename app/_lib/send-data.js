import { supabase } from "@/app/_lib/supabase";

const users = [
  {
    name: "Alice Johnson",
    email: "alice@example.com",
    password: "hashed_password_1", // Replace with a hashed password
    "profile-img": "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Bob Smith",
    email: "bob@example.com",
    password: "hashed_password_2", // Replace with a hashed password
    "profile-img": "https://i.pravatar.cc/150?img=2",
  },
];

const categories = [
  { name: "Rent", type: "expense", color: "#9e77ed", is_default: true },
  {
    name: "Credit Card",
    type: "expense",
    color: "#f04438",
    is_default: true,
  },
  {
    name: "Entertainment",
    type: "expense",
    color: "#4e5ba6",
    is_default: true,
  },
  { name: "Transport", type: "expense", color: "#17b26a", is_default: true },
  { name: "Salary", type: "income", color: "#22c55e", is_default: true },
];

const transactions = [
  {
    type: "expense",
    amount: "1200",
    note: "Paid monthly rent",
    date: "2025-06-01",
  },
  {
    type: "expense",
    amount: "400",
    note: "Uber and fuel",
    date: "2025-06-02",
  },
  {
    type: "expense",
    amount: "250",
    note: "Movie tickets and snacks",
    date: "2025-06-03",
  },
  {
    type: "income",
    amount: "3500",
    note: "Monthly salary",
    date: "2025-06-01",
  },
];

// Insert dummy users
export async function insertDummyUsers() {
  const { data, error } = await supabase.from("users").insert(users);
  if (error) console.error("Error inserting users:", error.message);
  else console.log("✅ Users inserted:", data);
}

// Insert dummy categories
export async function insertDummyCategories() {
  const { data, error } = await supabase.from("categories").insert(categories);
  if (error) console.error("Error inserting categories:", error.message);
  else console.log("✅ Categories inserted:", data);
}

// Insert dummy transactions
export async function insertDummyTransactions() {
  const { data, error } = await supabase
    .from("transactions")
    .insert(transactions);
  if (error) console.error("Error inserting transactions:", error.message);
  else console.log("✅ Transactions inserted:", data);
}
