"use client";
import { AuthTokenResponse } from "@supabase/supabase-js";
import { createContext, useContext, useState, ReactNode } from "react";

type UserContextType = {
  user: AuthTokenResponse | null;
  setUser: (user: AuthTokenResponse | null) => void;
};

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

const UserStore = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthTokenResponse | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUserStore(): UserContextType {
  return useContext(UserContext);
}

export default UserStore;
