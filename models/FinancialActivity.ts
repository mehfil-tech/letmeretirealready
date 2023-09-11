import { ActivityType } from "./ActivityType";
import { FinancialActivityType } from "./FinancialActivityType";
import { Frequency } from "./Frequency";

export interface FinancialActivity {
  id: number;
  name: string;
  type: FinancialActivityType;
  activityType?: ActivityType;
  frequency: Frequency;
  amount: number;
  stepUpPercentage?: number;
  interestRate: number;
  startDate: Date;
  endDate?: Date;
}

export const PlaceholderFinancialActivity = {
  amount: 30000,
  interestRate: 12,
  frequency: Frequency.Monthly,
  startDate: new Date(),
  endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 100)),
  id: -1,
  name: "New Saving",
  type: FinancialActivityType.Income,
  stepupPercentage: 0,
};
