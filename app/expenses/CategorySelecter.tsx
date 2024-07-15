import { ExpenseCategoryTotals } from "@models/ExpenseCategory";
import { IoCreateOutline } from "react-icons/io5";
import { numberToRupeeFormatter } from "./numberToRupeeFormatter";
import Link from "next/link";

interface CategorySelecterProps {
  categories: ExpenseCategoryTotals[];
  totalExpense: number;
  onSelect: (category: string) => void;
}

const CategorySelecter: React.FC<CategorySelecterProps> = ({
  categories,
  totalExpense,
  onSelect,
}) => {
  const navigateToCategories = () => {};
  return (
    <div className="flex flex-col">
      <Link
        href={"/expenses/categories"}
        className="flex align-middle justify-end pr-4"
        onClick={navigateToCategories}
      >
        <h1 className="text-md font-semibold p-2 pb-0">Categories</h1>
        <div className="p-2">
          <IoCreateOutline size={20} />
        </div>
      </Link>
      <div className="flex flex-col items-end space-y-3 mr-6 ml-6 mt-4 mb-4 h-full">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelect(category.name)}
            className="bg-gray-700 p-2 rounded-lg flex flex-col justify-center items-end"
            style={{width: 100+300*category.total/totalExpense }}
          >
            <div className="font-medium text-sm">{category.name}</div>
            <div className="text-xl font-light">
              {numberToRupeeFormatter(category.total)}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelecter;
