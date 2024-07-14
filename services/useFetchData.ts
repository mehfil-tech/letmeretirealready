import { useEffect, useState } from "react";
import { onSnapshot, query, where, collection } from "firebase/firestore";
import { db } from "@lib/firebase";
import useAuth from "@lib/useAuth";

export function useFetchData(collectionName: string) {
  const [data, setData] = useState<any[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    const q = query(collection(db, collectionName), where("userId", "==", user.uid));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedData: any[] = [];
      snapshot.forEach((doc) => {
        const data = { ...doc.data(), id: doc.id };
        fetchedData.push(data);
      });
      setData(fetchedData);
    });

    return () => unsubscribe();
  }, [user, collectionName]);

  return data;
}