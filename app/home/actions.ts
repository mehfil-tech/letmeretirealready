"use server";

import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { Expense } from "./models";
import { revalidatePath } from "next/cache";

export async function getExpenses() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("expenses")
    .select(
      `id, description, amount, expense_categories (id, name), payment_methods (id, name), date`
    )
    .returns<Expense[]>();

  if (error) {
    redirect("/error");
  }

  return data;
}

export async function deleteExpense(id: string) {
  const supabase = createClient();

  const timeStart = Date.now();
  const { error } = await supabase.from("expenses").delete().eq("id", id);
  const timeEnd = Date.now();
  console.log(`Delete expense took ${timeEnd - timeStart}ms`);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/home");
}

export async function getCategories() {
  const supabase = createClient();

  const { data, error } = await supabase.from("expense_categories").select("id, name");

  if (error) {
    redirect("/error");
  }

  return data;
}