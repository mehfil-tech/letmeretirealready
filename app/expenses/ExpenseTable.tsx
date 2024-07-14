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

const ExpenseTable = ({
  expenses,
  deleteExpense,
  onSubmit,
}: {
  expenses: Expense[];
  deleteExpense: (id: string) => void;
  onSubmit: (data: Expense) => void;
}) => {
  const table = useReactTable({
    data: expenses,
    columns: ExpenseTableColumns,
    getCoreRowModel: getCoreRowModel(),
  });
  const headers = table?.getHeaderGroups()[0].headers;
  return (
    <Table>
      <TableHeader>
        {headers.map((header) => (
          <TableHead key={header.id} className="font-medium">
            {header?.column.columnDef.header as React.ReactNode}
          </TableHead>
        ))}
      </TableHeader>
      <TableBody>
        <AddExpenseForm onSubmit={onSubmit} />

        {table?.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.original.description}</TableCell>
            <TableCell>{row.original.amount}</TableCell>
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
