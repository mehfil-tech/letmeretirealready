"use client";

import { createContext, useContext, useMemo } from "react";
import { Income } from "@models/Income";
import { useFetchData } from "@services/useFetchData";
import { useAddData } from "@services/useAddData";
import { useDeleteData } from "@services/useDeleteData";

type IncomeContextType = {
  incomes: Income[];
  addIncome: (income: Income) => Promise<void>;
  deleteIncome: (id: string) => Promise<void>;
};

export const IncomeContext = createContext<IncomeContextType>({
  incomes: [],
  addIncome: async () => {},
  deleteIncome: async () => {},
});

export function IncomeProvider({ children }: { children: React.ReactNode }) {
  const incomes = useFetchData("incomes");
  const addIncome = useAddData("incomes");
  const deleteIncome = useDeleteData("incomes");

  const contextValue = useMemo(
    () => ({ incomes, addIncome, deleteIncome }),
    [incomes, addIncome, deleteIncome]
  );

  return (
    <IncomeContext.Provider value={contextValue}>
      {children}
    </IncomeContext.Provider>
  );
}

export function useIncomeStore() {
  return useContext(IncomeContext);
}
