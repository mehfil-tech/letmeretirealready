"use client";

import { createContext, useContext, useMemo } from "react";
import { Investment } from "@models/Investment";
import { useFetchData } from "@services/useFetchData";
import { useAddData } from "@services/useAddData";
import { useDeleteData } from "@services/useDeleteData";

type InvestmentContextType = {
  investments: Investment[];
  addInvestment: (investment: Investment) => Promise<void>;
  deleteInvestment: (id: string) => Promise<void>;
};

export const InvestmentContext = createContext<InvestmentContextType>({
  investments: [],
  addInvestment: async () => {},
  deleteInvestment: async () => {},
});

export function InvestmentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const investments = useFetchData("investments");
  const addInvestment = useAddData("investments");
  const deleteInvestment = useDeleteData("investments");

  const contextValue = useMemo(
    () => ({ investments, addInvestment, deleteInvestment }),
    [investments, addInvestment, deleteInvestment]
  );

  return (
    <InvestmentContext.Provider value={contextValue}>
      {children}
    </InvestmentContext.Provider>
  );
}

export function useInvestmentStore() {
  return useContext(InvestmentContext);
}
