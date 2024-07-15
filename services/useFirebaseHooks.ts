import { useAddData } from "./useAddData";
import { useFetchData } from "./useFetchData";
import { useDeleteData } from "./useDeleteData";

const useFirebaseHooks = <T>(collectionName: string) => {
  const data = useFetchData(collectionName);
  const addData = useAddData<T>(collectionName);
  const deleteData = useDeleteData(collectionName);
  return { data, addData, deleteData };
};

export default useFirebaseHooks;
