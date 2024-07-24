"use client";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import { TableCell, TableRow } from "@components/ui/table";
import { IoAddCircle } from "react-icons/io5";
import { addExpense } from "./actions";

function AddExpenseForm({
  categories,
  payment_methods,
}: {
  categories: {
    id: any;
    name: any;
  }[];
  payment_methods: {
    id: any;
    name: any;
  }[];
}) {
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{
    description: string;
    amount: number;
    date: Date;
    expense_category: number;
    payment_method: number;
  }>({
    defaultValues: {
      description: "",
      amount: undefined,
      date: new Date(),
      expense_category: 56,
      payment_method: 1,
    },
  });
  const onSubmitHandler = (data: {
    description: string;
    amount: number;
    date: Date;
    expense_category: number;
    payment_method: number;
  }) => {
    startTransition(() => {
      reset({ ...data, description: "", amount: 0 });
      console.log(data.expense_category, categories);
      const description =
        data.description.trim().length === 0
          ? categories.find((category) => category.id == data.expense_category)
              ?.name +
            " " +
            data.amount
          : data.description;
      addExpense({ ...data, description });
    });
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit(onSubmitHandler)();
    }
  };
  return (
    <TableRow>
      <TableCell className="pr-3">
        <input
          className="h-10 rounded-md bg-transparent border border-gray-500 pl-2 pr-2 text-end w-24"
          style={{ appearance: "none" }}
          placeholder={"2400"}
          {...register("amount", { required: true, valueAsNumber: true })}
          onKeyDown={handleKeyDown}
        />
      </TableCell>
      <TableCell className="pl-3">
        <input
          className="h-10 rounded-md bg-transparent border border-gray-500 pl-2 pr-2 w-52"
          placeholder={"New Expense"}
          {...register("description")}
        />
      </TableCell>
      <TableCell className="pl-3">
        <input
          className="h-10 rounded-md bg-transparent border border-gray-500 pl-2 pr-2"
          style={{ appearance: "none", WebkitAppearance: "none" }}
          type="datetime-local"
          {...register("date")}
        />
      </TableCell>
      <TableCell className="pl-3">
        <select
          className="h-10 rounded-md bg-transparent border border-gray-500 pl-2 pr-2 w-32 appearance-none"
          style={{ appearance: "none" }}
          {...register("expense_category")}
        >
          {categories?.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </TableCell>
      <TableCell className="pl-3">
        <select
          className="h-10 rounded-md bg-transparent border border-gray-500 pl-2 pr-2 w-32"
          style={{ appearance: "none" }}
          {...register("payment_method")}
        >
          {payment_methods?.map((paymentMethod) => (
            <option key={paymentMethod.id} value={paymentMethod.id}>
              {paymentMethod.name}
            </option>
          ))}
        </select>
      </TableCell>

      <TableCell className="pl-3">
        <button
          className="flex w-full justify-center"
          type="submit"
          onClick={handleSubmit(onSubmitHandler)}
        >
          <IoAddCircle className="text-teal-500" size={24} />
        </button>
      </TableCell>
    </TableRow>
  );
}
export default AddExpenseForm;
