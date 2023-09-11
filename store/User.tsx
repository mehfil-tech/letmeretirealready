"use client";

import { createContext, useContext, useState } from "react";
import { PlaceholderSaving, Saving } from "@models/Saving";
import { SavingType } from "@models/ActivityType";
import { FinancialActivityType } from "@models/FinancialActivityType";
import {
  FinancialActivity,
  PlaceholderFinancialActivity,
} from "@models/FinancialActivity";

type ContextType = {
  savings: Saving[];
  setSavings: (savings: Saving[]) => void;
  financialActivities: FinancialActivity[];
  setFinancialActivities: (financialActivities: FinancialActivity[]) => void;
  expenses: number;
  setExpenses: (expenses: number) => void;
  inflation: number;
  setInflation: (inflation: number) => void;
};

export const UserContext = createContext<ContextType>({
  savings: [],
  setSavings: (_: any) => {},
  financialActivities: [],
  setFinancialActivities: (_: any) => {},
  expenses: 0,
  setExpenses: (_: any) => {},
  inflation: 0,
  setInflation: (_: any) => {},
});

function UserStore({ children }: { children: React.ReactNode }) {
  // The first element is always going to be the placeholder saving
  const [savings, setSavings] = useState<Saving[]>([PlaceholderSaving]);
  const [financialActivities, setFinancialActivities] = useState<
    FinancialActivity[]
  >([PlaceholderFinancialActivity]);
  const [expenses, setExpenses] = useState(30000);
  const [inflation, setInflation] = useState(3);

  return (
    <UserContext.Provider
      value={{
        savings,
        setSavings,
        financialActivities,
        setFinancialActivities,
        expenses,
        setExpenses,
        inflation,
        setInflation,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserStore() {
  return useContext(UserContext);
}

export default UserStore;
