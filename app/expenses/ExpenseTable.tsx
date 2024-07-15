import React, { useMemo } from "react";
import {
  useReactTable,
  ColumnDef,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { Expense } from "@models/Expense";
import { ExpenseTableColumns } from "./ExpenseTableColumns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui/table";
import { IoTrash, IoTrashBinOutline } from "react-icons/io5";
import AddExpenseForm from "./AddExpenseForm";
import { ExpenseCategory } from "@models/ExpenseCategory";
import { numberToRupeeFormatter } from "./numberToRupeeFormatter";

const ExpenseTable = ({
  expenses,
  categories,
  deleteExpense,
  onSubmit,
}: {
  expenses: Expense[];
  categories: ExpenseCategory[];
  deleteExpense: (id: string) => void;
  onSubmit: (data: Expense) => void;
}) => {
  const table = useReactTable({
    data: expenses,
    columns: ExpenseTableColumns,
    getCoreRowModel: getCoreRowModel(),
  });
  const headers = table?.getHeaderGroups()[0].headers;
  console.log(JSON.stringify(expenses[0]?.category));
  return (
    <Table className="w-min">
      <TableHeader>
        {headers.map((header) => (
          <TableHead key={header.id} className="font-medium">
            {header?.column.columnDef.header as React.ReactNode}
          </TableHead>
        ))}
      </TableHeader>
      <TableBody>
        <AddExpenseForm onSubmit={onSubmit} categories={categories} />
        {table?.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.original.description}</TableCell>
            <TableCell>{row.original.category?.name ?? "Other"}</TableCell>
            <TableCell>{numberToRupeeFormatter(row.original.amount)}</TableCell>
            <TableCell>
              {new Date(row.original.date.seconds * 1000).toLocaleDateString()}
            </TableCell>
            <TableCell>
              <button
                onClick={() => deleteExpense(row.original.id as string)}
                className="flex w-full justify-center"
              >
                <IoTrash color="red" size={18} />
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ExpenseTable;
