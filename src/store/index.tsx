import UserStore from "./User";

function RootStore({ children }: { children: React.ReactNode }) {
  return <UserStore>{children}</UserStore>;
}

export default RootStore;
