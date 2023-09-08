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
    <div className="flex gap-3">
      <button
        className={`rounded-full hover:scale-125 active:scale-100 duration-200 bg-slate-300 dark:bg-slate-700 text-2xl`}
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
                PlaceholderSaving,
                { ...savings[0], id: Math.random() },
                ...savings.slice(1),
              ])
            : setSavings([PlaceholderSaving]);
          console.log("added ", JSON.stringify(savings[0]));
        }}
      >
        {<IoAdd />}
      </button>
      {renderMessage()}
    </div>
  );
}

export default AddSaving;
