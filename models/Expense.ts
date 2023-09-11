import { ExpenseType } from "./ExpenseType";

export interface Expense {
  id: number;
  name: string;
  amount: number;
  startDate: Date;
  endDate?: Date;
  type?: ExpenseType;
  stepUpPercentage?: number;
}
