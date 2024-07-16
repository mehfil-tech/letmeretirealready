import React from "react";
import { useForm } from "react-hook-form";
import { Expense } from "@models/Expense";
import { TableCell, TableRow } from "@components/ui/table";
import { IoAddCircle } from "react-icons/io5";
import { ExpenseCategory } from "@models/ExpenseCategory";

const AddExpenseForm = ({
  onSubmit,
  categories,
}: {
  onSubmit: (data: Expense) => void;
  categories: ExpenseCategory[];
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      description: "",
      amount: 0,
      date: "",
      category: "Other",
    },
  });
  const onSubmitHandler = (data: any) => {
    reset();
    onSubmit({ ...data, category: { name: data.category } });
  };
  return (
    <TableRow>
      <TableCell className="pl-3">
        <input
          className="h-10 rounded-md bg-transparent border border-gray-600 pl-2 pr-2"
          placeholder={"New Expense"}
          {...register("description", { required: true })}
        />
      </TableCell>
      <TableCell className="pl-3">
        <select
          className="h-10 rounded-md bg-transparent border border-gray-600 pl-2 pr-2 w-28"
          style={{ appearance: "none" }}
          {...register("category", { required: true })}
        >
          {categories?.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </TableCell>
      <TableCell className="pl-3">
        <input
          className="h-10 rounded-md bg-transparent border border-gray-600 pl-2 pr-2"
          style={{ appearance: "none" }}
          placeholder={"2400"}
          {...register("amount", { required: true, valueAsNumber: true })}
        />
      </TableCell>
      <TableCell className="pl-3">
        <input
          className="h-10 rounded-md bg-transparent border border-gray-600 pl-2 pr-2"
          style={{ appearance: "none" }}
          type="date"
          {...register("date", { required: true })}
        />
      </TableCell>
      <TableCell className="pl-3">
        <button
          className="flex w-full justify-center"
          type="submit"
          onClick={handleSubmit(onSubmitHandler)}
        >
          <IoAddCircle className="text-green-500" size={20} />
        </button>
      </TableCell>
    </TableRow>
  );
};
export default AddExpenseForm;
