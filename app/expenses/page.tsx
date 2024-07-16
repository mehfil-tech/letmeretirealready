"use client";
import { useExpenseStore } from "@store/Expense";
import { Expense } from "@models/Expense";
import ExpenseTable from "./ExpenseTable";
import useFirebaseHooks from "@services/useFirebaseHooks";
import { ExpenseCategory } from "@models/ExpenseCategory";
import CategorySelecter from "./CategorySelecter";
import expenseHelper from "./expenseHelper";
import MonthSelector from "./MonthSelector";

function Home() {
  const {
    data: expenses,
    addData: addExpense,
    deleteData: deleteExpense,
  } = useFirebaseHooks<Expense>("expenses");
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
    <div className="flex flex-col flex-1">
      <section className="flex flex-row flex-1">
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
      <div>
        <MonthSelector onSelect={(month) => console.log(month)} />
      </div>
    </div>
  );
}

export default Home;
