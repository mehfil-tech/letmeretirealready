export interface CreditCard {
  id?: string;
  userId: string;
  amount: number;
  description: string;
  dueDate: Date;
  paid: boolean;
}