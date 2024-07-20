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

async function ExpenseTable({
  page,
  perPage,
}: {
  page: number;
  perPage: number;
}) {
  const expenses = await getExpenses(page, perPage);

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
    <div className="hidden sm:block">
      <Table className="shadow-md border-[1px] rounded-lg">
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
        <TableBody className="overflow-y-hidden">
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
              <TableCell className="w-64">{expense.description}</TableCell>
              <TableCell>
                {format(new Date(expense.date), "dd/MM/yy hh:mm a")}
              </TableCell>
              <TableCell className="w-32">
                {expense.expense_categories?.name}
              </TableCell>
              <TableCell>{expense.payment_methods?.name}</TableCell>
              <TableCell>
                <DeleteButton id={expense.id as string} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex flex-row space-x-4 justify-end items-center py-4">
        {/* Displaying x of y results */}
        <p className="text-gray-500 text-sm font-medium">
          Displaying {(page - 1) * perPage}-
          {(page - 1) * perPage + expenses.length} of expensesTotal
        </p>
        <Link
          href={`/home?page=${page - 1}&perPage=10`}
          className="p-2 bg-gray-700 text-white font-medium rounded-md w-28 text-center"
        >
          Previous
        </Link>
        <Link
          href={`/home?page=${page + 1}&perPage=10`}
          className="p-2 bg-gray-700 text-white font-medium rounded-md w-28 text-center"
        >
          Next
        </Link>
      </div>
    </div>
  );
}

export default ExpenseTable;
