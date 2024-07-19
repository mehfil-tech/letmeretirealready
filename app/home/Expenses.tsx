import ExpenseTable from "./ExpenseTable";
import { getExpenses } from "./actions";

export default async function Expenses() {
  const expenses = await getExpenses();
  return <ExpenseTable expenses={expenses} />;
}
