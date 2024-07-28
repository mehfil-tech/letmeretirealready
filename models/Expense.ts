export interface Expense {
  id?: string;
  user_id?: string;
  created_at?: Date;
  amount: number;
  description: string;
  date: Date;
  category: number;
  payment_method: number;
}
