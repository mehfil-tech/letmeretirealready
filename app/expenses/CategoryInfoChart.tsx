"use client";

import * as React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
} from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { CategoryExpense } from "./ExpenseInfo";

const chartConfig = {} satisfies ChartConfig;

export function CategoryInfoChart({
  categories,
}: {
  categories: CategoryExpense[];
}) {
  const flattenCategories = categories.map((category) => ({
    expense_category: category.expense_categories.name,
    total: category.total,
  })); // Sort by total in descending order

  return (
    <div className="flex justify-center items-center">
      <ChartContainer
        config={chartConfig}
        className="w-80 h-72 flex justify-center items-center"
      >
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="50%"
          data={flattenCategories}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="expense_category" />
          {/* <PolarRadiusAxis /> */}
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Radar
            name="Expenses:."
            dataKey="total"
            stroke="#008080"
            fill="#008080"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ChartContainer>
    </div>
  );
}
