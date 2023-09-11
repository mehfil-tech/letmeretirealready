import { Frequency } from "./Frequency";
import { SavingType } from "./ActivityType";

// Saving model
export interface Saving {
  id: number;
  name: string;
  type?: SavingType;
  frequency?: Frequency;
  amount: number;
  stepUpPercentage?: number;
  interestRate: number;
  startDate: Date;
  endDate?: Date;
}

export const PlaceholderSaving = {
  amount: 30000,
  interestRate: 12,
  frequency: Frequency.Monthly,
  startDate: new Date(),
  endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 100)),
  id: -1,
  name: "New Saving",
  stepupPercentage: 0,
};
