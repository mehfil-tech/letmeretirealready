import Link from "next/link";
import { Expense } from "./models";

export default function Paginator({
  page,
  perPage,
  expenses,
  count,
}: {
  page: number;
  perPage: number;
  expenses: Expense[];
  count: number;
}) {
  const pageInitialElements = (page - 1) * perPage + 1;
  const pageFinalElements = (page - 1) * perPage + expenses.length;
  const previousPageExists = page > 1;
  const nextPageExists = pageFinalElements < count;
  const previousPageLink = previousPageExists ? `/expenses?page=${page - 1}` : "";
  const nextPageLink = nextPageExists ? `/expenses?page=${page + 1}` : "";
  return (
    <div className="flex flex-row space-x-4 justify-end items-center py-4">
      {/* Displaying x of y results */}
      <p className="text-gray-500 text-sm font-medium">
        {pageInitialElements}-{pageFinalElements} of {count}
      </p>
      <Link
        href={previousPageLink}
        className={`p-2 ${
          previousPageExists ? "bg-gray-700" : "bg-gray-300"
        } text-white font-medium rounded-md w-28 text-center`}
      >
        Previous
      </Link>
      <Link
        href={nextPageLink}
        className={`p-2 ${
          nextPageExists ? "bg-gray-700" : "bg-gray-300"
        } text-white font-medium rounded-md w-28 text-center`}
      >
        Next
      </Link>
    </div>
  );
}
