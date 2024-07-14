"use client";

import { createContext, useContext, useMemo } from "react";
import { Expense } from "@models/Expense";
import { useFetchData } from "@services/useFetchData";
import { useAddData } from "@services/useAddData";
import { useDeleteData } from "@services/useDeleteData";

type ExpenseContextType = {
  expenses: Expense[];
  addExpense: (expense: Expense) => Promise<void>;
  deleteExpense: (id: string) => Promise<void>;
};

export const ExpenseContext = createContext<ExpenseContextType>({
  expenses: [],
  addExpense: async () => {},
  deleteExpense: async () => {},
});

export function ExpenseProvider({ children }: { children: React.ReactNode }) {
  const expenses = useFetchData("expenses");
  const addExpense = useAddData("expenses");
  const deleteExpense = useDeleteData("expenses");

  const contextValue = useMemo(
    () => ({ expenses, addExpense, deleteExpense }),
    [expenses, addExpense, deleteExpense]
  );

  return (
    <ExpenseContext.Provider value={contextValue}>
      {children}
    </ExpenseContext.Provider>
  );
}

export function useExpenseStore() {
  return useContext(ExpenseContext);
}
