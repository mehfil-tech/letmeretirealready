import React, { Suspense } from "react";
import { ExpenseTableColumns } from "./ExpenseTableColumns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui/table";
import AddExpenseForm from "./AddExpenseForm";
import { numberToRupeeFormatter } from "./numberToRupeeFormatter";
import DeleteButton from "./DeleteButton";
import { getCategories, getExpenses, getPaymentMethods } from "./actions";
import { format } from "date-fns";
import Paginator from "./Paginator";
import { Expense } from "./models";

async function AddExpense() {
  const categories = await getCategories();
  const payment_methods = await getPaymentMethods();
  return (
    <Suspense
      fallback={
        <AddExpenseForm
          categories={[{ id: "1", name: "Other" }]}
          payment_methods={[{ id: "1", name: "Cash" }]}
        />
      }
    >
      <AddExpenseForm
        categories={categories}
        payment_methods={payment_methods}
      />
    </Suspense>
  );
}

function ExpenseHead() {
  return (
    <TableHeader>
      <TableRow>
        <TableHead className="font-medium text-right">Amount</TableHead>
        <TableHead className="font-medium">Description</TableHead>
        <TableHead className="font-medium">Date Time</TableHead>
        <TableHead className="font-medium">Category</TableHead>
        <TableHead className="font-medium">Method</TableHead>
        <TableHead className="font-medium">Action</TableHead>
      </TableRow>
    </TableHeader>
  );
}

function ExpenseBody({ expenses }: { expenses: Expense[] }) {
  return (
    <>
      {expenses.map((expense) => (
        <TableRow key={expense.id}>
          <TableCell className="text-end font-medium">
            {numberToRupeeFormatter(expense.amount)}
          </TableCell>
          <TableCell className="truncate line-clamp-1 w-52">
            {expense.description}
          </TableCell>
          <TableCell>
            {format(new Date(expense.date), "dd/MM/yy hh:mm a")}
          </TableCell>
          <TableCell className="w-32 truncate line-clamp-1">
            {expense.expense_categories?.name}
          </TableCell>
          <TableCell>{expense.payment_methods?.name}</TableCell>
          <TableCell>
            <DeleteButton id={expense.id as string} />
          </TableCell>
        </TableRow>
      ))}
      {Array.from({
        length: 10 - expenses.length,
      }).map((_, i) => (
        <TableRow key={i}>
          <TableCell className="text-transparent">{"hidden text"}</TableCell>
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
        </TableRow>
      ))}
    </>
  );
}

function ExpenseTableContainer({
  page,
  expenses,
  count,
}: {
  page: number;
  expenses: Expense[];
  count: number;
}) {
  return (
    <div className="hidden md:block px-6">
      <div>
        <Table className="border-[0.5px] border-gray-400">
          <ExpenseHead />
          <TableBody>
            <AddExpense />
            <ExpenseBody expenses={expenses} />
          </TableBody>
        </Table>
      </div>
      <Paginator page={page} expenses={expenses} count={count ?? 0} />
    </div>
  );
}

async function ExpenseTableComponent({ page }: { page: number }) {
  const { data: expenses, count } = await getExpenses(page);
  return (
    <ExpenseTableContainer page={page} expenses={expenses} count={count ?? 0} />
  );
}

function ExpenseTable({ page }: { page: number }) {
  return (
    <Suspense
      fallback={<ExpenseTableContainer page={page} expenses={[]} count={0} />}
    >
      <ExpenseTableComponent page={page} />
    </Suspense>
  );
}

export default ExpenseTable;
