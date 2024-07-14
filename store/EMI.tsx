"use client";

import { createContext, useContext, useMemo } from "react";
import { EMI } from "@models/EMI";
import { useFetchData } from "@services/useFetchData";
import { useAddData } from "@services/useAddData";
import { useDeleteData } from "@services/useDeleteData";

type EMIContextType = {
  emis: EMI[];
  addEMI: (emi: EMI) => Promise<void>;
  deleteEMI: (id: string) => Promise<void>;
};

export const EMIContext = createContext<EMIContextType>({
  emis: [],
  addEMI: async () => {},
  deleteEMI: async () => {},
});

export function EMIProvider({ children }: { children: React.ReactNode }) {
  const emis = useFetchData("emis");
  const addEMI = useAddData("emis");
  const deleteEMI = useDeleteData("emis");

  const contextValue = useMemo(
    () => ({ emis, addEMI, deleteEMI }),
    [emis, addEMI, deleteEMI]
  );

  return (
    <EMIContext.Provider value={contextValue}>{children}</EMIContext.Provider>
  );
}

export function useEMIStore() {
  return useContext(EMIContext);
}
