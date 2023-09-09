import { PlaceholderSaving, Saving } from "@models/Saving";
import { useUserStore } from "@store/User";
import { useEffect, useState } from "react";
import { IoAdd } from "react-icons/io5";

export const enum INPUT_VALIDITY {
  INVALID = -1,
  VALID = 1,
  UNCHECKED = 0,
}

function AddSaving() {
  const { savings, setSavings } = useUserStore();
  const [inputValidity, setInputValidity] = useState(INPUT_VALIDITY.UNCHECKED);
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
    <button
      onClick={() => {
        // Validate savings[0]
        if (
          savings.length > 0 &&
          (!savings[0].name ||
            savings[0].amount === 0 ||
            !savings[0].interestRate)
        ) {
          setInputValidity(INPUT_VALIDITY.INVALID);
          return;
        }
        setInputValidity(INPUT_VALIDITY.VALID);
        savings.length > 0
          ? setSavings([
              { ...PlaceholderSaving, id: -Math.random() },
              savings[0],
              ...savings.slice(1),
            ])
          : setSavings([PlaceholderSaving]);
        console.log("added ", JSON.stringify(savings[0]));
      }}
      className="flex gap-3 rounded-full hover:scale-105 active:scale-100 duration-200 bg-slate-300 dark:bg-slate-700 p-2 pr-4 m-4 justify-center"
    >
      <div className={` text-2xl`}>{<IoAdd />}</div>
      <div>Add Saving</div>
    </button>
  );
}

export default AddSaving;
