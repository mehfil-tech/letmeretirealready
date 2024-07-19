import React from "react";
import { ExpenseTableColumns } from "./ExpenseTableColumns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui/table";
import { IoTrash } from "react-icons/io5";
import AddExpenseForm from "./AddExpenseForm";
import { numberToRupeeFormatter } from "./numberToRupeeFormatter";
import { Expense } from "./models";
import DeleteButton from "./DeleteButton";

async function ExpenseTable({ expenses }: { expenses: Expense[] }) {
  return (
    <Table className="w-min ml-2">
      <TableHeader>
        {ExpenseTableColumns.map(({ header }, index) => (
          <TableHead key={index} className="font-medium">
            {header as React.ReactNode}
          </TableHead>
        ))}
      </TableHeader>
      <TableBody>
        <AddExpenseForm categories={[]} />
        {expenses.map((expense) => (
          <TableRow key={expense.id}>
            <TableCell>{expense.description}</TableCell>
            <TableCell>{expense.expense_categories?.name ?? "Other"}</TableCell>
            <TableCell>{numberToRupeeFormatter(expense.amount)}</TableCell>
            <TableCell>{new Date(expense.date).toDateString()}</TableCell>
            <TableCell>
              <DeleteButton id={expense.id as string} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ExpenseTable;
