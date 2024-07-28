import { Suspense } from "react";
import Expenses from "./ExpenseTable";
import ExpenseInfo from "./ExpenseInfo";

function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
  const month = searchParams.month
    ? parseInt(searchParams.month as string)
    : new Date().getMonth();
  const year = searchParams.year
    ? parseInt(searchParams.year as string)
    : new Date().getFullYear();

  console.log("month", month, "year", year);
  return (
    <div className="flex justify-between">
      <ExpenseInfo month={month} year={year} />
      <Suspense fallback="loading">
        <Expenses page={page} />
      </Suspense>
    </div>
  );
}

export default Home;
