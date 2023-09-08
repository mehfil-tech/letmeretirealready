import { Saving } from "@models/Saving";
import { useUserStore } from "@store/User";
import { IoTrash } from "react-icons/io5";

function RemoveSaving({ saving }: { saving: Saving }) {
  const { savings, setSavings } = useUserStore();
  return (
    <button
      className={`mt-3.5 w-full flex justify-center p-2 h-10 rounded-md hover:scale-105 active:scale-100 duration-200 bg-red-500 text-xl text-white`}
      onClick={() => {
        setSavings(savings.filter((s) => s.id !== saving.id));
        console.log("removed ", JSON.stringify(saving));
      }}
    >
      {<IoTrash />}
    </button>
  );
}

export default RemoveSaving;
