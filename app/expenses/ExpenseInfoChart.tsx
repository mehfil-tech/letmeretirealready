"use client";

import { ChartConfig, ChartContainer } from "@components/ui/chart";
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";
import { MonthlyExpense } from "./ExpenseInfo";
import { getMonth } from "date-fns";
export enum MONTHS {
  January = 0,
  February = 1,
  March = 2,
  April = 3,
  May = 4,
  June = 5,
  July = 6,
  August = 7,
  September = 8,
  October = 9,
  November = 10,
  December = 11,
}

const getMonthString = (date: Date) => {
  return MONTHS[getMonth(date)];
};

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export default function ExpenseInfoChart({
  monthlyExpenses,
}: {
  monthlyExpenses: MonthlyExpense[];
}) {
  return (
    <ChartContainer className="h-56" config={chartConfig}>
      <BarChart
        data={monthlyExpenses.map((item) => ({
          month: getMonthString(item.month),
          total: item.total,
        }))}
      >
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="total" fill="#008080" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
