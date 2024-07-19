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

async function ExpenseTable() {
  const expenses = await getExpenses();

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
    <div>
      <Table className="w-min ml-2 ">
        <TableHeader>
          <TableRow>
            {ExpenseTableColumns.map((column) => (
              <TableHead className="font-medium" key={column?.header}>
                {column?.header}
              </TableHead>
            ))}
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
              <TableCell>{expense.description}</TableCell>
              <TableCell>{numberToRupeeFormatter(expense.amount)}</TableCell>
              <TableCell>
                {format(new Date(expense.date), "dd/MM/yy hh:mm a")}
              </TableCell>
              <TableCell>{expense.expense_categories?.name}</TableCell>
              <TableCell>{expense.payment_methods?.name}</TableCell>
              <TableCell>
                <DeleteButton id={expense.id as string} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ExpenseTable;
