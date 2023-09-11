// User Info Component

"use client";

import { PlaceholderFinancialActivity } from "@models/FinancialActivity";
import { PlaceholderSaving } from "@models/Saving";
import { useUserStore } from "@store/User";
import { calculateDateToExceedValue } from "@utils/calculateRetirement";
import useWindowDimensions from "@utils/useWindowDimensions";
import { LineChart, Line, XAxis, Tooltip } from "recharts";

function UserInfo() {
  const { width, height } = useWindowDimensions();
  const { financialActivities, inflation, expenses } = useUserStore();
  const { date, monthlyExpenses, value } = calculateDateToExceedValue(
    financialActivities,
    expenses,
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
