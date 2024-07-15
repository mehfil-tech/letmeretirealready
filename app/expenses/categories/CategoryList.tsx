import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui/table";
import { ExpenseCategory } from "@models/ExpenseCategory";
import React from "react";
import { useForm } from "react-hook-form";
import { IoAddCircle, IoTrash } from "react-icons/io5";

interface CategoryListProps {
  categories: ExpenseCategory[];
  addCategory: (category: ExpenseCategory) => void;
  deleteCategory: (categoryId: string) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  addCategory,
  deleteCategory,
}) => {
  const { register, handleSubmit } = useForm({ defaultValues: { name: "" } });
  return (
    <div>
      <Table>
        <TableHeader>
          <TableHead className="w-20 self-center">Action</TableHead>
          <TableHead className="">Category</TableHead>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <button
                onClick={handleSubmit(addCategory)}
                className="flex w-full justify-center"
              >
                <IoAddCircle className="text-green-500" size={20} />
              </button>
            </TableCell>
            <TableCell>
              <input
                className="h-10 rounded-md bg-transparent border border-gray-600 pl-2 text-center"
                type="text"
                placeholder="New category"
                {...register("name", {
                  required: true,
                  minLength: 1,
                  maxLength: 20,
                })}
              />
            </TableCell>
          </TableRow>
          {categories.map((category) => (
            <TableRow key={category.id}>
              <TableCell>
                <button
                  onClick={() => deleteCategory(category.id as string)}
                  className="flex w-full justify-center"
                >
                  <IoTrash color="red" size={18} />
                </button>
              </TableCell>
              <TableCell>
                <div className="rounded-md p-4 bg-gray-700 text-center">
                  {category.name}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CategoryList;
