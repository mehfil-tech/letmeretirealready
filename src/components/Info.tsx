// User Info Component

"use client";

import { useUseStore } from "@store/User";
import { calculateYearsToExceedValue } from "@utils/lumsum";

function UserInfo() {
  const { savings, inflation, expenses } = useUseStore();
  const { newTargetValue, yearlyExpense, years } = calculateYearsToExceedValue(
    savings[0].saving,
    savings[0].interestRate,
    expenses,
    inflation
  );
  return (
    <section className="flex-row p-4">
      <div className="mb-4">
        Number of years required to retire
        <div className="text-4xl">{years}</div>
      </div>
      <div className="mb-4">
        Expenses after {years} years
        <div className="text-4xl">
          {new Intl.NumberFormat("en-IN").format(yearlyExpense)}
        </div>
      </div>
      <div className="mb-4">
        By the 4% rule, to retire, you'll need to save
        <div className="text-4xl">
          {new Intl.NumberFormat("en-IN").format(newTargetValue)}
        </div>
      </div>
    </section>
  );
}

export default UserInfo;
