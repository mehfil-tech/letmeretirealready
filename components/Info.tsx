// User Info Component

"use client";

import { useUseStore } from "@store/User";
import { calculateYearsToExceedValue } from "@utils/lumsum";
import useWindowDimensions from "@utils/useWindowDimensions";
import { LineChart, Line, XAxis, Tooltip } from "recharts";

function UserInfo() {
  const { width, height } = useWindowDimensions();
  const { savings, inflation, expenses } = useUseStore();
  const { newTargetValue, yearlyExpense, years, chartData } =
    calculateYearsToExceedValue(
      savings[0].saving,
      savings[0].interestRate,
      expenses,
      inflation
    );
  const chartWidth = width ? width - 40 : 400;
  const chartHeight = height ? (height > 400 ? 400 : height) : 400;
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
        By the 4% rule, to retire, you&apos;ll need to save
        <div className="text-4xl">
          {new Intl.NumberFormat("en-IN").format(newTargetValue)}
        </div>
      </div>
      <div className="mb-4 flex">
        <LineChart width={chartWidth} height={chartHeight} data={chartData}>
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
          <XAxis dataKey="year" />
          <Tooltip />
        </LineChart>
      </div>
    </section>
  );
}

export default UserInfo;
