"use client";
import { useTransition } from "react";
import { IoTrash } from "react-icons/io5";
import { deleteExpense } from "./actions";

export default function DeleteButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();
  return (
    <button
      className="flex w-full justify-center"
      onClick={() => startTransition(() => deleteExpense(id))}
    >
      <IoTrash color="red" size={18} />
    </button>
  );
}
