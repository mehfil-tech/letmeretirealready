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
import Link from "next/link";
import Paginator from "./Paginator";

async function ExpenseTable({
  page,
  perPage,
}: {
  page: number;
  perPage: number;
}) {
  const { data: expenses, count } = await getExpenses(page, perPage);

  async function renderAddExpenseForm() {
    const categories = await getCategories();
    const payment_methods = await getPaymentMethods();
    return (
      <AddExpenseForm
        categories={categories}
        payment_methods={payment_methods}
      />
    );
  }

  return (
    <div className="hidden md:block p-6">
      <div className="shadow-md">
        <Table className="border-[1px]">
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
          <TableBody>
            <Suspense
              fallback={
                <AddExpenseForm
                  categories={[{ id: "1", name: "Other" }]}
                  payment_methods={[{ id: "1", name: "Cash" }]}
                />
              }
            >
              {renderAddExpenseForm()}
            </Suspense>
            {expenses.map((expense) => (
              <TableRow key={expense.id}>
                <TableCell className="text-end font-medium">
                  {numberToRupeeFormatter(expense.amount)}
                </TableCell>
                <TableCell className="truncate line-clamp-1 w-64 ">
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
            {Array.from({ length: perPage - expenses.length }).map((_, i) => (
              <TableRow key={i}>
                <TableCell className="text-transparent">
                  {"hidden text"}
                </TableCell>
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Paginator
        page={page}
        perPage={perPage}
        expenses={expenses}
        count={count ?? 0}
      />
    </div>
  );
}

export default ExpenseTable;
