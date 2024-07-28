import { Expense } from "@models/Expense";
import { ColumnDef } from "@tanstack/react-table";

export const ExpenseTableColumns = [
  {
    header: "Amount",
    accessor: "amount",
  },
  {
    header: "Description",
    accessor: "description",
  },
  {
    header: "Date",
    accessor: "date",
  },
  {
    header: "Category",
    accessor: "category",
  },
  {
    header: "Payment Mode",
    accessor: "paymentMethod",
  },
  {
    header: "Action",
    accessor: "action",
  },
];
