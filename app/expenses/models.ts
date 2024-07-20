export type Expense = {
  id?: string;
  amount: number;
  description: string;
  date: Date;
  expense_categories: {
    id: number;
    name: string;
  };
  payment_methods: {
    id: number;
    name: string;
  };
};

export type ExpenseForm = {
  description: string;
  amount: number;
  date: Date;
  expense_category: number;
  payment_method: number;
};
