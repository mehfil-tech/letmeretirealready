"use client";

import { createContext, useContext, useMemo } from "react";
import { useFetchData } from "@services/useFetchData";
import { useAddData } from "@services/useAddData";
import { useDeleteData } from "@services/useDeleteData";
import { ExpenseCategory } from "@models/ExpenseCategory";

type ExpenseCategoryContextType = {
  expenseCategories: ExpenseCategory[];
  addExpenseCategory: (expense: ExpenseCategory) => Promise<void>;
  deleteExpenseCategory: (id: string) => Promise<void>;
};

export const ExpenseCategoryContext = createContext<ExpenseCategoryContextType>(
  {
    expenseCategories: [],
    addExpenseCategory: async () => {},
    deleteExpenseCategory: async () => {},
  }
);

export function ExpenseProvider({ children }: { children: React.ReactNode }) {
  const expenseCategories = useFetchData("expenseCategories");
  const addExpenseCategory = useAddData("expenseCategories");
  const deleteExpenseCategory = useDeleteData("expenseCategories");

  const contextValue = useMemo(
    () => ({ expenseCategories, addExpenseCategory, deleteExpenseCategory }),
    [expenseCategories, addExpenseCategory, deleteExpenseCategory]
  );

  return (
    <ExpenseCategoryContext.Provider value={contextValue}>
      {children}
    </ExpenseCategoryContext.Provider>
  );
}

export function useExpenseCategoryStore() {
  return useContext(ExpenseCategoryContext);
}
