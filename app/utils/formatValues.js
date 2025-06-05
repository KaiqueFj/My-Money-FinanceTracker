import { format } from "date-fns";

export function formatCurrency(value) {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
}

export function formatDate(date) {
  return format(new Date(date), "dd/MM/yyyy");
}
