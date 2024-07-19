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
}
