// User Info Component

"use client";

import useAuth from "@lib/useAuth";
import { useUserStore } from "@store/User";
import { calculateDateToExceedValue } from "@utils/calculateRetirement";

function UserInfo() {
  const { financialActivities, inflation } = useUserStore();
  const { date, value, monthlyExpenses } = calculateDateToExceedValue(
    financialActivities,
    inflation
  );
  return (
    <section className="flex-row p-6 pt-2 sm:pt-0">
      <div className="mb-4 ">
        You will retire in
        {monthlyExpenses > 0 && value > 0 ? (
          <div className="text-4xl">{date?.toLocaleDateString()}</div>
        ) : (
          <div className="text-4xl opacity-30">
            {value > 0 ? "Add expenses" : "Add savings"}
          </div>
        )}
      </div>
      <div className="mb-4">
        Monthly expenses
        {monthlyExpenses > 0 ? ` by ${date?.toLocaleDateString()}` : ""}
        {monthlyExpenses > 0 ? (
          <div className="text-4xl">
            {new Intl.NumberFormat("en-IN").format(monthlyExpenses)}
          </div>
        ) : (
          <div className="text-4xl opacity-30">No expenses</div>
        )}
      </div>
      <div className="mb-4">
        Total savings
        {value > 0 ? ` by ${date?.toLocaleDateString()}` : ""}
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
