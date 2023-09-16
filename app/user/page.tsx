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
    <div className="p-4 flex flex-col justify-between">
      <div className="flex flex-col">
        <h1 className="pb-2 text-xl">
          {user?.isAnonymous ? "Anonymous User" : user?.displayName}
        </h1>
        <p className="pb-2">
          {user?.isAnonymous ? "Sign in to save your data" : user?.email}{" "}
        </p>
        <ThemeSwitcher />
      </div>
      <div>
        <button
          className="bg-red-500 flex-1 w-full h-10 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
          onClick={async () => {
            await logout();
            router?.push("/");
          }}
        >
          Sign out
        </button>
      </div>
    </div>
  );
}

export default User;
