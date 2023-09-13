"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { FinancialActivity } from "@models/FinancialActivity";
import { db } from "@lib/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import useAuth from "@lib/useAuth";

type ContextType = {
  financialActivities: FinancialActivity[];
  addFinancialActivity: (financialActivity: FinancialActivity) => void;
  deleteFinancialActivity: (financialActivity: FinancialActivity) => void;
  inflation: number;
  setInflation: (inflation: number) => void;
};

export const UserContext = createContext<ContextType>({
  financialActivities: [],
  addFinancialActivity: (_: any) => {},
  deleteFinancialActivity: (_: any) => {},
  inflation: 0,
  setInflation: (_: any) => {},
});

function UserStore({ children }: { children: React.ReactNode }) {
  // The first element is always going to be the placeholder saving
  const [financialActivities, setFinancialActivities] = useState<
    FinancialActivity[]
  >([]);
  const [inflation, setInflation] = useState(3);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;
    const unsubscribe = onSnapshot(
      query(
        collection(db, "financial activities"),
        where("userId", "==", user?.uid)
      ),
      (snapshot) => {
        const financialActivities: FinancialActivity[] = [];
        snapshot.forEach((doc) => {
          const data = { ...doc.data(), id: doc.id } as FinancialActivity;
          financialActivities.push(data);
        });
        setFinancialActivities(financialActivities);
      }
    );

    return () => unsubscribe();
  }, [user]);

  const addFinancialActivity = async (financialActivity: FinancialActivity) => {
    const docRef = collection(db, "financial activities");
    await addDoc(docRef, { ...financialActivity, userId: "abc" });
  };

  const deleteFinancialActivity = async (
    financialActivity: FinancialActivity
  ) => {
    if (!financialActivity.id) return;
    const docRef = doc(db, "financial activities", financialActivity.id);
    await deleteDoc(docRef);
  };

  return (
    <UserContext.Provider
      value={{
        financialActivities,
        addFinancialActivity,
        deleteFinancialActivity,
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
