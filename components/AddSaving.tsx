import {
  FinancialActivity,
  PlaceholderFinancialActivity,
} from "@models/FinancialActivity";
import { useUserStore } from "@store/User";
import { useEffect, useState } from "react";
import { IoAdd, IoCheckmark, IoClose, IoCaretDown } from "react-icons/io5";
import DatePicker from "react-datepicker";
import { FinancialActivityType } from "@models/FinancialActivityType";
import { Frequency } from "@models/Frequency";

export const BOX_STYLE =
  "w-full h-10 rounded-md pl-3 pr-2 bg-white dark:bg-zinc-700";

export const enum INPUT_VALIDITY {
  INVALID = -1,
  VALID = 1,
  UNCHECKED = 0,
}

function AddFinancialActivity() {
  const [financialActivity, setFinancialActivity] = useState<FinancialActivity>(
    PlaceholderFinancialActivity
  );
  const { addFinancialActivity } = useUserStore();
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
    <div
      className={`flex flex-col ${
        newActivityVisible ? "bg-neutral-100 dark:bg-gray-900" : ""
      } m-4 rounded-lg`}
    >
      {newActivityVisible ? (
        <div className="flex flex-col m-4  rounded-lg transition-opacity duration-500 opacity-100">
          <div className="flex gap-3 w-full">
            <div className="w-full">
              <div className="text-xs mb-0.5">Name</div>
              <div className="flex gap-3">
                <input
                  className={`${BOX_STYLE} w-full`}
                  placeholder="Mutual funds"
                  value={financialActivity?.name}
                  onChange={(e) => {
                    setFinancialActivity({
                      ...financialActivity,
                      name: e?.target?.value ?? "",
                    });
                  }}
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-3 mt-2 ">
            <div className="flex-col w-full">
              <div className="text-xs mb-0.5">Amount</div>
              <input
                className={`${BOX_STYLE}`}
                placeholder="1000"
                value={financialActivity?.amount}
                onChange={(e) => {
                  setFinancialActivity({
                    ...financialActivity,
                    amount: Number(e?.target?.value),
                  });
                }}
                type="numeric"
              />
            </div>
          </div>
          <div className="">
            <div className="text-xs mb-0.5 mt-2">Interest Rate</div>
            <input
              placeholder="12%"
              className={`${BOX_STYLE}`}
              value={financialActivity?.interestRate}
              onChange={(e) => {
                setFinancialActivity({
                  ...financialActivity,
                  interestRate: Number(e?.target?.value),
                });
              }}
              type="numeric"
            />
          </div>
          <div className="flex-col flex-1">
            <div className="text-xs mb-0.5 mt-2">Interval</div>
            <div className="relative">
              <select
                className={`${BOX_STYLE} appearance-none`}
                value={financialActivity?.frequency}
                onChange={(e) => {
                  setFinancialActivity({
                    ...financialActivity,
                    frequency: e?.target?.value as Frequency,
                  });
                }}
              >
                {Object.keys(Frequency).map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <IoCaretDown />
              </div>
            </div>
            <div className="text-xs mb-0.5 mt-2">Type</div>
            <div className="relative">
              <select
                className={`${BOX_STYLE} appearance-none`}
                value={financialActivity?.type}
                onChange={(e) => {
                  setFinancialActivity({
                    ...financialActivity,
                    type: e?.target?.value as FinancialActivityType,
                  });
                }}
              >
                {Object.values(FinancialActivityType).map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <IoCaretDown />
              </div>
            </div>
          </div>
          <div className="">
            <div className="text-xs mb-0.5 mt-2">Start Date</div>
            <DatePicker
              className={`${BOX_STYLE}`}
              selected={financialActivity?.startDate}
              onChange={(date: any) =>
                setFinancialActivity({
                  ...financialActivity,
                  startDate: date,
                })
              }
            />
          </div>
          <div className="">
            <div className="text-xs mb-0.5 mt-2">End Date</div>
            <DatePicker
              className={`${BOX_STYLE} bg-black`}
              selected={financialActivity?.endDate}
              onChange={(date: any) =>
                setFinancialActivity({
                  ...financialActivity,
                  endDate: date,
                })
              }
            />
          </div>
        </div>
      ) : null}
      {/* Cancel button */}
      {newActivityVisible ? (
        <button
          onClick={() => {
            setNewActivityVisible(false);
          }}
          className="flex gap-1 rounded-full border-2  p-2 pr-4 ml-4 mr-4  justify-center"
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
            !financialActivity?.name ||
            financialActivity.amount === 0 ||
            !financialActivity.interestRate
          ) {
            setInputValidity(INPUT_VALIDITY.INVALID);
            return;
          }
          setInputValidity(INPUT_VALIDITY.VALID);
          addFinancialActivity(financialActivity);
          setNewActivityVisible(false);
        }}
        className="flex gap-1 rounded-full bg-green-300 dark:bg-green-600 p-2 pr-4 m-4 justify-center"
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
