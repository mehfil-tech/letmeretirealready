import { FinancialActivity } from "@models/FinancialActivity";
import { FinancialActivityType } from "@models/FinancialActivityType";
import { Frequency } from "@models/Frequency";

const shouldContributeThisMonth = (
  activity: FinancialActivity,
  currentYear: number,
  currentMonth: number
): boolean => {
  const { frequency, startDate, endDate } = activity;

  if (
    new Date(currentYear, currentMonth) < startDate ||
    (endDate && new Date(currentYear, currentMonth) > endDate)
  ) {
    return false;
  }

  switch (frequency) {
    case Frequency.Monthly:
      return true;
    case Frequency.Quarterly:
      return currentMonth % 3 === 0;
    case Frequency.Halfyearly:
      return currentMonth % 6 === 0;
    case Frequency.Yearly:
      return currentMonth === 0;
    case Frequency.OneTime:
      return (
        currentYear === startDate.getFullYear() &&
        currentMonth === startDate.getMonth()
      );
    default:
      return false;
  }
};

export const calculateDateToExceedValue = (
  activities: FinancialActivity[],
  initialExpense: number,
  inflationRate: number
): Date | null => {
  let totalValue = 0;
  let monthlyExpense = initialExpense;
  let newTargetValue = monthlyExpense / 0.04;
  let accumulatedInterest = 0;

  const earliestStartDate = activities.reduce(
    (prevDate, activity) =>
      activity.startDate < prevDate ? activity.startDate : prevDate,
    new Date()
  );
  let currentYear = earliestStartDate.getFullYear();
  let currentMonth = earliestStartDate.getMonth();

  while (totalValue < newTargetValue) {
    for (const activity of activities) {
      if (shouldContributeThisMonth(activity, currentYear, currentMonth)) {
        const multiplier =
          activity.type === FinancialActivityType.Expense ? -1 : 1;
        const contribution = activity.amount * multiplier;
        const adjustedContribution =
          contribution +
          (contribution * (activity.stepUpPercentage || 0)) / 100;

        totalValue += adjustedContribution;

        // Accumulate interest for the year
        accumulatedInterest +=
          adjustedContribution * (activity.interestRate / 100);
      }
    }
    if (currentMonth === 11) {
      // End of the year
      totalValue += accumulatedInterest; // Add accumulated interest to total value
      accumulatedInterest = 0; // Reset for next year
    }
    monthlyExpense *= 1 + inflationRate / 1200;
    newTargetValue = monthlyExpense / 0.04;

    currentMonth++;
    if (currentMonth > 11) {
      currentYear++;
      currentMonth = 0;
    }

    if (
      new Date(currentYear, currentMonth).getTime() >
      new Date().setFullYear(new Date().getFullYear() + 100)
    ) {
      // Stop after 100 years to avoid infinite loop
      return null;
    }
  }

  return new Date(currentYear, currentMonth);
};
