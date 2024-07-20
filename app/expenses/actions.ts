"use server";

import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { Expense, ExpenseForm } from "./models";
import { revalidatePath } from "next/cache";

export async function getExpenses(page: number, perPage: number) {
  const supabase = createClient();

  const timeStart = Date.now();

  const { data, error, count } = await supabase
    .from("expenses")
    .select(
      `id, description, amount, expense_categories (id, name), payment_methods (id, name), date`,
      { count: "exact" }
    )
    .range((page - 1) * perPage, page * perPage - 1)
    .returns<Expense[]>()
    .order("date", { ascending: false });

  const timeEnd = Date.now();
  console.log(`Expense list took ${timeEnd - timeStart}ms`);

  if (error) {
    redirect("/error");
  }

  return { data, count, error };
}

export async function addExpense(expense: ExpenseForm) {
  const supabase = createClient();

  const { error } = await supabase.from("expenses").insert([expense]);

  if (error) {
    console.log(error);
    redirect("/error");
  }

  revalidatePath("/home");
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

  const { data, error } = await supabase
    .from("expense_categories")
    .select("id, name")
    .order("name", { ascending: true });

  if (error) {
    redirect("/error");
  }

  return data;
}

export async function getPaymentMethods() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("payment_methods")
    .select("id, name")
    .order("name", { ascending: true });

  if (error) {
    redirect("/error");
  }

  return data;
}
