"use server";

import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { Expense, ExpenseForm } from "./models";
import { revalidatePath } from "next/cache";
import monthYearToDateFormatter from "./monthYearToDateFormatter";
import { EXPENSE_PAGE_SIZE } from "./pageSize";
import { CategoryExpense } from "./ExpenseInfo";

export async function getExpenses(page: number) {
  const supabase = createClient();

  const { data, error, count } = await supabase
    .from("expenses")
    .select(
      `id, description, amount, expense_categories (id, name), payment_methods (id, name), date`,
      { count: "exact" }
    )
    .range((page - 1) * EXPENSE_PAGE_SIZE, page * EXPENSE_PAGE_SIZE - 1)
    .returns<Expense[]>()
    .order("date", { ascending: false });

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

  const { error } = await supabase.from("expenses").delete().eq("id", id);

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

export async function getMonthlyExpenseTotals(year: number) {
  const formattedDateThisYear = monthYearToDateFormatter(year);
  const formattedDateNextYear = monthYearToDateFormatter(year + 1);
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const userId = session?.user?.id;

  const { data, error } = await supabase
    .from("monthly_expenses")
    .select("month, total")
    .eq("user_id", userId)
    .gte("month", formattedDateThisYear)
    .lt("month", formattedDateNextYear);

  if (error) {
    redirect("/error");
  }

  return data;
}

export async function getMonthlyCategoryExpenses(month: number, year: number) {
  const formattedDate = monthYearToDateFormatter(year, month);

  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const userId = session?.user?.id;

  const { data, error } = await supabase
    .from("monthly_category_expenses")
    .select("month, total, expense_categories (id, name)")
    .eq("user_id", userId)
    .eq("month", formattedDate)
    .returns<CategoryExpense[]>();

  if (error) {
    console.log("error", error);
    redirect("/error");
  }

  return data;
}
