import Link from "next/link";
import { Expense } from "./models";
import { EXPENSE_PAGE_SIZE } from "./pageSize";

export default function Paginator({
  page,
  expenses,
  count,
}: {
  page: number;
  expenses: Expense[];
  count: number;
}) {
  const pageInitialElements = (page - 1) * EXPENSE_PAGE_SIZE + 1;
  const pageFinalElements = (page - 1) * EXPENSE_PAGE_SIZE + expenses.length;
  const previousPageExists = page > 1;
  const nextPageExists = pageFinalElements < count;
  const previousPageLink = previousPageExists
    ? `/expenses?page=${page - 1}`
    : "";
  const nextPageLink = nextPageExists ? `/expenses?page=${page + 1}` : "";
  return (
    <div className="flex flex-row space-x-4 justify-end items-center py-4">
      {/* Displaying x of y results */}
      <p className="text-gray-500 text-sm font-semibold">
        {pageInitialElements}-{pageFinalElements} of {count}
      </p>
      <Link
        href={previousPageLink}
        className={`p-2 text-sm ${
          previousPageExists ? "bg-teal-700" : "bg-teal-400"
        } text-white font-semibold w-28 text-center`}
      >
        previous
      </Link>
      <Link
        href={nextPageLink}
        className={`p-2 text-sm ${
          nextPageExists ? "bg-teal-700" : "bg-teal-400"
        } text-white font-semibold w-28 text-center`}
      >
        next
      </Link>
    </div>
  );
}
