"use server";

import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { Expense, ExpenseForm } from "./models";
import { revalidatePath } from "next/cache";

export async function getExpenses() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("expenses")
    .select(
      `id, description, amount, expense_categories (id, name), payment_methods (id, name), date`
    )
    .returns<Expense[]>()
    .order("date", { ascending: false });

  if (error) {
    redirect("/error");
  }

  return data;
}

export async function addExpense(expense: ExpenseForm) {
  const supabase = createClient();

  const timeStart = Date.now();
  const { error } = await supabase.from("expenses").insert([expense]);
  const timeEnd = Date.now();
  console.log(`Add expense took ${timeEnd - timeStart}ms`);

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
