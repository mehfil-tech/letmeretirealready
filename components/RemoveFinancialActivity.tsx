import { FinancialActivity } from "@models/FinancialActivity";
import { useUserStore } from "@store/User";
import { IoTrash } from "react-icons/io5";
import Modal from "./Modal";
import { useState } from "react";

function RemoveFinancialActivity({
  financialActivity,
}: {
  financialActivity: FinancialActivity;
}) {
  const { deleteFinancialActivity } = useUserStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onConfirm={() => {
          console.log(financialActivity?.id);
          if (financialActivity?.id) {
            deleteFinancialActivity(financialActivity);
            console.log("removed ", JSON.stringify(financialActivity));
          }
          setIsModalOpen(false);
        }}
        onClose={() => setIsModalOpen(false)}
      />
      <button
        className={` p-2 mb-2  rounded-md text-xl text-red-500`}
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        {<IoTrash />}
      </button>
    </div>
  );
}

export default RemoveFinancialActivity;
