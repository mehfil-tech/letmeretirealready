import { FinancialActivity } from "@models/FinancialActivity";
import { useUserStore } from "@store/User";
import { IoTrash } from "react-icons/io5";

function RemoveFinancialActivity({ financialActivity }: { financialActivity: FinancialActivity }) {
  const { financialActivities, setFinancialActivities } = useUserStore();
  return (
    <button
      className={`mt-3.5 w-full flex justify-center p-2 h-10 rounded-md hover:scale-105 active:scale-100 duration-200 bg-red-500 text-xl text-white`}
      onClick={() => {
        setFinancialActivities(financialActivities.filter((f) => f.id !== financialActivity.id));
        console.log("removed ", JSON.stringify(financialActivity));
      }}
    >
      {<IoTrash />}
    </button>
  );
}

export default RemoveFinancialActivity;
