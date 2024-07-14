import React from "react";
import { useForm } from "react-hook-form";
import { Expense } from "@models/Expense";
import { TableCell, TableRow } from "@components/ui/table";
import { IoAdd } from "react-icons/io5";
import { DateTimePicker } from "@components/DateTimePicker";

const AddExpenseForm = ({
  onSubmit,
}: {
  onSubmit: (data: Expense) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      description: "",
      amount: undefined,
      date: "",
    },
  });
  const onSubmitHandler = (data: any) => {
    onSubmit(data);

  };
  return (
    <TableRow>
      <TableCell>
        <input
          className="h-10 w-64 rounded-md"
          placeholder={"New Expense"}
          {...register("description", { required: true })}
        />
      </TableCell>
      <TableCell>
        <input
          className="h-10 w-32 rounded-md"
          style={{ appearance: "none", alignSelf: "end" }}
          placeholder={"2400"}
          {...register("amount", { required: true, valueAsNumber: true })}
        />
      </TableCell>
      <TableCell>
        <input
          className="h-10 w-32 rounded-md"
          style={{ appearance: "none" }}
          type="date"
          {...register("date", { required: true })}
        />
      </TableCell>
      <TableCell>
        <button
          className="flex w-full justify-center"
          type="submit"
          onClick={handleSubmit(onSubmitHandler, (error) =>
            console.log("error")
          )}
        >
          <div className="bg-green-500 rounded-full p-0.5">
            <IoAdd color="white" />
          </div>
        </button>
      </TableCell>
    </TableRow>
  );
};
export default AddExpenseForm;
