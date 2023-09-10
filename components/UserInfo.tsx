// User Info Component

"use client";

import { PlaceholderSaving } from "@models/Saving";
import { useUserStore } from "@store/User";
import { calculateYearsToExceedValue } from "@utils/calculateRetirement";
import useWindowDimensions from "@utils/useWindowDimensions";
import { LineChart, Line, XAxis, Tooltip } from "recharts";

function UserInfo() {
  const { width, height } = useWindowDimensions();
  const { savings, inflation, expenses } = useUserStore();
  const { newTargetValue, yearlyExpense, years, chartData, currentValue } =
    calculateYearsToExceedValue(
      PlaceholderSaving.amount,
      PlaceholderSaving.interestRate,
      expenses,
      inflation
    );
  return (
    <section className="flex-row p-4">
      <div className="mb-4">
        Years to retirement
        <div className="text-4xl">{years}</div>
      </div>
      <div className="mb-4">
        Expenses after {years} years
        <div className="text-4xl">
          {new Intl.NumberFormat("en-IN").format(yearlyExpense)}
        </div>
      </div>
      <div className="mb-4">
        Total savings after {years} years
        <div className="text-4xl">
          {new Intl.NumberFormat("en-IN").format(currentValue)}
        </div>
      </div>
      {/* <div className="flex">
        <LineChart width={chartWidth} height={chartHeight} data={chartData}>
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
          <XAxis dataKey="year" />
          <Tooltip />
        </LineChart>
      </div> */}
    </section>
  );
}

export default UserInfo;
