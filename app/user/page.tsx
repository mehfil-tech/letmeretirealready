"use client";
import { ThemeSwitcher } from "@components/ThemeSwitcher";
import { logout } from "@lib/firebase";
import useAuth from "@lib/useAuth";
import { useRouter } from "next/navigation";

// Make a user page
function User() {
  const { user, loading } = useAuth();
  const router = useRouter();
  return (
    <div className="p-4">
      <h1 className="pb-2 text-xl">
        {" "}
        {user?.isAnonymous ? "Anonymous User" : user?.displayName}
      </h1>
      <p className="pb-2">
        {" "}
        {user?.isAnonymous ? "Sign in to save your data" : user?.email}{" "}
      </p>
      <div>
        <ThemeSwitcher />
      </div>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={async () => {
          await logout();
          router?.push("/");
        }}
      >
        Sign out
      </button>
    </div>
  );
}

export default User;
