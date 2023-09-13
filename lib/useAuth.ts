import { useState, useEffect } from 'react';
import { User, getAuth, onAuthStateChanged } from 'firebase/auth';

function useAuth(): { user: User | null, loading: boolean } {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser: User | null) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, []);

  return { user, loading };
};

export default useAuth;