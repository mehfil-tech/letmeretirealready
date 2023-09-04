"use client";

import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

export const UserContext = createContext({
  savings: [{ saving: 0, interestRate: 0 }],
  setSavings: (_: any) => {},
  expenses: 0,
  setExpenses: (_: any) => {},
  inflation: 0,
  setInflation: (_: any) => {},
});

function UserStore({ children }: { children: React.ReactNode }) {
  const [savings, setSavings] = useState([{ saving: 0, interestRate: 12 }]);
  const [expenses, setExpenses] = useState(0);
  const [inflation, setInflation] = useState(3);

  return (
    <UserContext.Provider
      value={{
        savings,
        setSavings,
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

export function useUseStore() {
  return useContext(UserContext);
}

export default UserStore;
