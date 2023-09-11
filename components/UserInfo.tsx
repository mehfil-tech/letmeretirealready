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
        You will retire in {date?.toLocaleDateString()}
        <div className="text-4xl">{}</div>
      </div>
      <div className="mb-4">
        Expenses in {date?.getFullYear()}
        <div className="text-4xl">
          {new Intl.NumberFormat("en-IN").format(monthlyExpenses)}
        </div>
      </div>
      <div className="mb-4">
        Total savings in {date?.getFullYear()}
        <div className="text-4xl">
          {new Intl.NumberFormat("en-IN").format(value)}
        </div>
      </div>
    </section>
  );
}

export default UserInfo;
