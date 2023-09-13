import React from "react";
import { useRouter } from "next/navigation";
import useAuth from "@lib/useAuth";

function IsAuth<T>(Component: React.ComponentType<T>) {
  return (props: T) => {
    // make a api call to check if user is authenticated
    const { user, loading } = useAuth();
    const router = useRouter();

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!user) {
      router.push("/");
    }

    return (
      <>
        <Component {...props!} />
      </>
    );
  };
}
IsAuth.displayName = "MyComponent";
export default IsAuth;
