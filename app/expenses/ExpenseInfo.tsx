import { Suspense } from "react";
import { getMonthlyCategoryExpenses, getMonthlyExpenseTotals } from "./actions";
import { getMonth, getYear } from "date-fns";
import { numberToRupeeFormatter } from "./numberToRupeeFormatter";
import { ChartConfig, ChartContainer } from "@components/ui/chart";
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";
import ExpenseInfoChart from "./ExpenseInfoChart";
import { CategoryInfoChart } from "./CategoryInfoChart";

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

export type MonthlyExpense = {
  month: Date;
  total: number;
};

export type CategoryExpense = {
  expense_categories: {
    id: number;
    name: string;
  };
  total: number;
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

function CategoriesComponent({
  categories,
}: {
  categories: CategoryExpense[];
}) {
  return <CategoryInfoChart categories={categories} />;
}

function MonthlyExpensesComponent({
  monthly,
  month,
  year,
}: {
  monthly: MonthlyExpense[];
  month: number;
  year: number;
}) {
  const expenseForSelectedMonth = monthly.find(
    (monthExpenseItem) =>
      getMonth(monthExpenseItem.month) === month &&
      getYear(monthExpenseItem.month) === year
  );
  return (
    <div>
      <div>
        <div className="flex flex-row space-x-2 items-baseline">
          <div className="text-teal-700 text-4xl">
            {getMonthString(new Date(year, month))}
          </div>
          <div className="text-teal-700 text-lg font-medium">{year}</div>
        </div>
        <div className="flex flex-row space-x-2 items-baseline">
          <div className="text-6xl">
            {numberToRupeeFormatter(expenseForSelectedMonth?.total ?? 0)}
          </div>
          <div className="text-lg">spent</div>
        </div>
      </div>
    </div>
  );
}

function ExpenseInfoComponent({
  month,
  year,
  monthly,
  categories,
}: {
  month: number;
  year: number;
  monthly: MonthlyExpense[];
  categories: CategoryExpense[];
}) {
  return (
    <div className="flex flex-col space-y-6">
      <MonthlyExpensesComponent month={month} year={year} monthly={monthly} />
      <CategoriesComponent categories={categories} />
      <ExpenseInfoChart monthlyExpenses={monthly} />
    </div>
  );
}

async function ExpenseInfoFetcher({
  month,
  year,
}: {
  month: number;
  year: number;
}) {
  const [monthly, categories] = await Promise.all([
    getMonthlyExpenseTotals(year),
    getMonthlyCategoryExpenses(month, year),
  ]);
  return (
    <ExpenseInfoComponent
      month={month}
      year={year}
      monthly={monthly}
      categories={categories}
    />
  );
}

export default function ExpenseInfo({
  month,
  year,
}: {
  month: number;
  year: number;
}) {
  return (
    <div className="mx-6 mr-0">
      <Suspense
        fallback={
          <ExpenseInfoComponent
            month={1}
            year={new Date().getFullYear()}
            monthly={[]}
            categories={[]}
          />
        }
      >
        <ExpenseInfoFetcher month={month} year={year} />
      </Suspense>
    </div>
  );
}
