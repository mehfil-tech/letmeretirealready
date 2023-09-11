import { FinancialActivityType } from "./FinancialActivityType";
import { Frequency } from "./Frequency";

export interface FinancialActivity {
  id: number;
  name: string;
  type: FinancialActivityType;
  frequency: Frequency;
  amount: number;
  stepUpPercentage?: number;
  interestRate: number;
  startDate: Date;
  endDate?: Date;
}
