import UserStore from "./User";

function RootStore({ children }) {
    return (
        <UserStore>
            {children}
        </UserStore>
    );
}

export default RootStore;