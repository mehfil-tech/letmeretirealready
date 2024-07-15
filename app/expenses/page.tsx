"use client";
import { useExpenseStore } from "@store/Expense";
import { Expense } from "@models/Expense";
import ExpenseTable from "./ExpenseTable";
import useFirebaseHooks from "@services/useFirebaseHooks";
import { ExpenseCategory } from "@models/ExpenseCategory";
import CategorySelecter from "./CategorySelecter";
import expenseHelper from "./expenseHelper";

function Home() {
  const { expenses, addExpense, deleteExpense } = useExpenseStore();
  const { data: categories } =
    useFirebaseHooks<ExpenseCategory>("expenseCategories");
  const onSubmit = (values: Expense) => {
    addExpense(values);
  };
  const { orderedCategories, totalExpense } = expenseHelper(
    expenses,
    categories
  );
  return (
    <section className="flex flex-row">
      <ExpenseTable
        expenses={expenses}
        categories={categories}
        deleteExpense={deleteExpense}
        onSubmit={onSubmit}
      />
      <div>
        <CategorySelecter
          categories={orderedCategories}
          totalExpense={totalExpense}
          onSelect={(category) => console.log(category)}
        />
      </div>
    </section>
  );
}

export default Home;
