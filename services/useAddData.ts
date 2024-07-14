import { addDoc, collection } from "firebase/firestore";
import { db } from "@lib/firebase";
import useAuth from "@lib/useAuth";

export function useAddData<T>(collectionName: string) {
  const { user } = useAuth();

  const addData = async (data: T) => {
    try {
      const docRef = collection(db, collectionName);
      await addDoc(docRef, { ...data, userId: user?.uid });
    } catch (error) {
      console.error(`Error adding data to ${collectionName}:`, error);
    }
  };

  return addData;
}
