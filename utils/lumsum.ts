// Calculate a lumsum based on a given amount and a given interest rate for a given period of time compounded annually

const calculateStepUpSIPValue = (
  initialMonthlyInvestment: number,
  annualInterestRate: number,
  years: number,
  stepUpPercentage = 0
): number => {
  const annualInterestRateDecimal = annualInterestRate / 100;
  let sipValue = 0;
  let monthlyInvestment = initialMonthlyInvestment;
  for (let year = 1; year <= years; year++) {
    sipValue += monthlyInvestment * 12;
    sipValue *= 1 + annualInterestRateDecimal;
    monthlyInvestment += (monthlyInvestment * stepUpPercentage) / 100;
  }

  return sipValue;
};

export const calculateYearsToExceedValue = (
  initialInvestment: number,
  annualGrowthRate: number,
  initialExpense: number,
  inflationRate: number
): { years: number; newTargetValue: number; yearlyExpense: number } => {
  let years = 0;
  let currentValue = 0;
  let yearlyExpense = initialExpense * 12;
  let newTargetValue = yearlyExpense / 0.04;

  while (currentValue < newTargetValue) {
    currentValue = calculateStepUpSIPValue(
      initialInvestment,
      annualGrowthRate,
      years
    );
    yearlyExpense *= 1 + inflationRate / 100;
    newTargetValue = yearlyExpense / 0.04;
    years++;

    if (years > 100) {
      // To prevent infinite loops, set a maximum limit (adjust as needed).
      return { years: -1, newTargetValue: -1, yearlyExpense: -1 };
    }
  }

  return {
    years,
    newTargetValue: Math.round(newTargetValue),
    yearlyExpense: Math.round(yearlyExpense / 12),
  };
};
