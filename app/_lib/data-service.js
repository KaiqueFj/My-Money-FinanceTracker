import { supabase } from "./supabase";

export const getTransactions = async function () {
  const { data, error } = await supabase
    .from("transactions")
    .select("id, amount, type, note, date")
    .order("date");

  if (error) {
    console.error(error);
    throw new Error("transactions could not be loaded");
  }

  return data;
};
