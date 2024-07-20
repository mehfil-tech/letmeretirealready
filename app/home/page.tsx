import { Suspense } from "react";
import Expenses from "./ExpenseTable";

function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  console.log("searchParams", searchParams);
  const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
  const perPage = searchParams.perPage
    ? parseInt(searchParams.perPage as string)
    : 10;
  return (
    <div className="flex justify-center">
      <Suspense>
        <Expenses page={page} perPage={perPage} />
      </Suspense>
    </div>
  );
}

export default Home;
