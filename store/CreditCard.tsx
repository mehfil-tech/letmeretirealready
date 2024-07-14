"use client";

import { createContext, useContext, useMemo } from "react";
import { CreditCard } from "@models/CreditCard";
import { useFetchData } from "@services/useFetchData";
import { useAddData } from "@services/useAddData";
import { useDeleteData } from "@services/useDeleteData";

type CreditCardContextType = {
  creditCards: CreditCard[];
  addCreditCard: (creditCard: CreditCard) => Promise<void>;
  deleteCreditCard: (id: string) => Promise<void>;
};

export const CreditCardContext = createContext<CreditCardContextType>({
  creditCards: [],
  addCreditCard: async () => {},
  deleteCreditCard: async () => {},
});

export function CreditCardProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const creditCards = useFetchData("creditCards");
  const addCreditCard = useAddData("creditCards");
  const deleteCreditCard = useDeleteData("creditCards");

  const contextValue = useMemo(
    () => ({ creditCards, addCreditCard, deleteCreditCard }),
    [creditCards, addCreditCard, deleteCreditCard]
  );

  return (
    <CreditCardContext.Provider value={contextValue}>
      {children}
    </CreditCardContext.Provider>
  );
}

export function useCreditCardStore() {
  return useContext(CreditCardContext);
}
