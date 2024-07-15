export interface ExpenseCategory {
  id?: string;
  userId?: string;
  name: string;
}

export interface ExpenseCategoryTotals extends ExpenseCategory {
  total: number;
}
