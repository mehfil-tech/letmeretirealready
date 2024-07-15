import { Expense } from "@models/Expense";
import {
  ExpenseCategory,
  ExpenseCategoryTotals,
} from "@models/ExpenseCategory";

const expenseHelper = (expenses: Expense[], categories: ExpenseCategory[]) => {
  const totalExpense = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  const expenseCategoryTotals: ExpenseCategoryTotals[] = categories.map(
    (category) => ({ ...category, total: 0 })
  );
  expenses.forEach((expense) => {
    const category = expenseCategoryTotals.find(
      (category) => category.name === expense.category?.name ?? "Other"
    );
    console.log(JSON.stringify(expense?.category));
    if (category) {
      category.total += expense.amount;
    }
  });
  const orderedCategories = expenseCategoryTotals.sort(
    (a, b) => b.total - a.total
  );
  return { totalExpense, orderedCategories };
};

export default expenseHelper;
