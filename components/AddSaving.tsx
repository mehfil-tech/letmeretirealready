import { PlaceholderFinancialActivity } from "@models/FinancialActivity";
import { useUserStore } from "@store/User";
import { useEffect, useState } from "react";
import { IoAdd, IoCheckmark, IoClose } from "react-icons/io5";
import NewUserFinancialActivity from "./NewUserSaving";
import { set } from "mongoose";

export const enum INPUT_VALIDITY {
  INVALID = -1,
  VALID = 1,
  UNCHECKED = 0,
}

function AddFinancialActivity() {
  const { financialActivities, setFinancialActivities } = useUserStore();
  const [inputValidity, setInputValidity] = useState(INPUT_VALIDITY.UNCHECKED);
  const [newActivityVisible, setNewActivityVisible] = useState(false);

  useEffect(() => {
    if (inputValidity !== INPUT_VALIDITY.UNCHECKED) {
      setTimeout(() => {
        setInputValidity(INPUT_VALIDITY.UNCHECKED);
      }, 2000);
    }
  }, [inputValidity]);

  const renderMessage = () => {
    switch (inputValidity) {
      case INPUT_VALIDITY.INVALID:
        return (
          <div className="text-sm self-center text-red-500 transition-opacity">
            Invalid input
          </div>
        );
      case INPUT_VALIDITY.VALID:
        return (
          <div className="text-sm self-center text-green-500 transition-opacity">
            Added
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col">
      {newActivityVisible ? <NewUserFinancialActivity /> : null}
      {/* Cancel button */}
      {newActivityVisible ? (
        <button
          onClick={() => {
            setNewActivityVisible(false);
          }}
          className="flex gap-3 rounded-full border-2  p-2 pr-4 ml-4 mr-4 mb-4 justify-center"
        >
          <div className={` text-2xl`}>
            <IoClose />
          </div>
          <div>Cancel</div>
        </button>
      ) : null}
      <button
        onClick={() => {
          // Validate financialActivities[0]
          if (!newActivityVisible) {
            setNewActivityVisible(true);
            return;
          }
          if (
            financialActivities.length > 0 &&
            (!financialActivities[0].name ||
              financialActivities[0].amount === 0 ||
              !financialActivities[0].interestRate)
          ) {
            setInputValidity(INPUT_VALIDITY.INVALID);
            return;
          }
          setInputValidity(INPUT_VALIDITY.VALID);
          financialActivities.length > 0
            ? setFinancialActivities([
                { ...PlaceholderFinancialActivity, id: -Math.random() },
                financialActivities[0],
                ...financialActivities.slice(1),
              ])
            : setFinancialActivities([PlaceholderFinancialActivity]);
          console.log("added ", JSON.stringify(financialActivities[0]));
          setNewActivityVisible(false);
        }}
        className="flex gap-3 rounded-full bg-green-300 dark:bg-green-600 p-2 pr-4 ml-4 mr-4 mb-4 justify-center"
      >
        <div className={`text-2xl`}>
          {newActivityVisible ? <IoCheckmark /> : <IoAdd />}
        </div>
        <div>Add Financial Activity</div>
      </button>
    </div>
  );
}

export default AddFinancialActivity;
