"use client";
import AddExpenseForm from "./AddExpenseForm";
import { useExpenseStore } from "@store/Expense";
import { Expense } from "@models/Expense";
import ExpenseTable from "./ExpenseTable";

function Home() {
  const { expenses, addExpense, deleteExpense } = useExpenseStore();
  const onSubmit = (values: Expense) => {
    console.log(values);
    addExpense(values);
  };
  return (
    <section className="grid justify-center h-[80vh]">
      <div className="sm:overflow-y-auto">
        <ExpenseTable
          expenses={expenses}
          deleteExpense={deleteExpense}
          onSubmit={onSubmit}
        />
      </div>
    </section>
  );
}

export default Home;
