"use client";

import { createContext, useContext, useState } from "react";
import {
  FinancialActivity,
  PlaceholderFinancialActivity,
} from "@models/FinancialActivity";

type ContextType = {
  financialActivities: FinancialActivity[];
  setFinancialActivities: (financialActivities: FinancialActivity[]) => void;
  inflation: number;
  setInflation: (inflation: number) => void;
};

export const UserContext = createContext<ContextType>({
  financialActivities: [],
  setFinancialActivities: (_: any) => {},
  inflation: 0,
  setInflation: (_: any) => {},
});

function UserStore({ children }: { children: React.ReactNode }) {
  // The first element is always going to be the placeholder saving
  const [financialActivities, setFinancialActivities] = useState<
    FinancialActivity[]
  >([PlaceholderFinancialActivity]);
  const [inflation, setInflation] = useState(3);

  return (
    <UserContext.Provider
      value={{
        financialActivities,
        setFinancialActivities,
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
