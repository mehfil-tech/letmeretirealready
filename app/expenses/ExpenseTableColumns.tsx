import { Expense } from "@models/Expense";
import { ColumnDef } from "@tanstack/react-table";

export const ExpenseTableColumns = [
  {
    header: "Description",
    accessor: "description",
  },
  {
    header: "Amount",
    accessor: "amount",
  },
  {
    header: "Date",
    accessor: "date",
  },
  {
    header: "Action",
    accessor: "action",
  },
];
