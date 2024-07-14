import { useState, useEffect } from "react";
import {
  User,
  getAuth,
  onAuthStateChanged,
  signInAnonymously,
} from "firebase/auth";

function useAuth(): { user: User | null; loading: boolean } {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(
      auth,
      async (currentUser: User | null) => {
        if (!currentUser) {
          try {
            // Sign in the user anonymously
            const userCredential = await signInAnonymously(auth);
            setUser(userCredential.user);
          } catch (error) {
            console.error("Error signing in anonymously:", error);
          }
        } else {
          setUser(currentUser);
        }
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return { user, loading };
}

export default useAuth;
