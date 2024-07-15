import { Timestamp } from "firebase/firestore";

export interface Expense {
  id?: string;
  userId?: string;
  amount: number;
  description: string;
  date: Timestamp;
  category: { id: string; name: string };
}
