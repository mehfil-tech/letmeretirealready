import { ActivityType } from "./ActivityType";
import { FinancialActivityType } from "./FinancialActivityType";
import { Frequency } from "./Frequency";

export interface FinancialActivity {
  id?: string;
  userId?: string;
  name?: string;
  type?: FinancialActivityType;
  activityType?: ActivityType;
  frequency?: Frequency;
  amount: number;
  stepUpPercentage?: number;
  interestRate: number;
  startDate: Date;
  endDate: Date;
}

export const PlaceholderFinancialActivity: FinancialActivity = {
  amount: 30000,
  interestRate: 12,
  frequency: Frequency.Monthly,
  startDate: new Date(),
  endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 100)),
  name: "New Saving",
  type: FinancialActivityType.Income,
  stepUpPercentage: 0,
};
