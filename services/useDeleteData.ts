import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@lib/firebase";

export function useDeleteData(collectionName: string) {
  const deleteData = async (id: string) => {
    if (!id) return;
    try {
      const docRef = doc(db, collectionName, id);
      await deleteDoc(docRef);
    } catch (error) {
      console.error(`Error deleting data from ${collectionName}:`, error);
    }
  };

  return deleteData;
}
