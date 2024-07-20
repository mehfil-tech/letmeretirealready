import { Suspense } from "react";
import Expenses from "./ExpenseTable";
import ExpenseInfo from "./ExpenseInfo";

function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
  const perPage = searchParams.perPage
    ? parseInt(searchParams.perPage as string)
    : 10;
  return (
    <div className="flex justify-between">
      <ExpenseInfo />
      <Suspense fallback="loading">
        <Expenses page={page} perPage={perPage} />
      </Suspense>
    </div>
  );
}

export default Home;
