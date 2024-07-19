import UserStore from "./user";

function RootStore({ children }: { children: React.ReactNode }) {
  return <UserStore>{children}</UserStore>;
}

export default RootStore;
