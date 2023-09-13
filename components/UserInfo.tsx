// User Info Component

"use client";

import { useUserStore } from "@store/User";
import { calculateDateToExceedValue } from "@utils/calculateRetirement";

function UserInfo() {
  const { financialActivities, inflation } = useUserStore();
  const { date, value, monthlyExpenses } = calculateDateToExceedValue(
    financialActivities.slice(1),
    inflation
  );
  return (
    <section className="flex-row p-4">
      <div className="mb-4">
        You will retire in
        {monthlyExpenses > 0 || value > 0 ? (
          <div className="text-4xl">{date?.getDate()}</div>
        ) : (
          <div className="text-4xl opacity-30">No financial activity</div>
        )}
      </div>
      <div className="mb-4">
        Expenses in {date?.getFullYear()}
        {monthlyExpenses > 0 ? (
          <div className="text-4xl">
            {new Intl.NumberFormat("en-IN").format(monthlyExpenses)}
          </div>
        ) : (
          <div className="text-4xl opacity-30">No expenses</div>
        )}
      </div>
      <div className="mb-4">
        Total savings in {date?.getFullYear()}
        {value > 0 ? (
          <div className="text-4xl">
            {new Intl.NumberFormat("en-IN").format(value)}
          </div>
        ) : (
          <div className="text-4xl opacity-30">No savings</div>
        )}
      </div>
    </section>
  );
}

export default UserInfo;
