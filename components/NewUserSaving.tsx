import { FinancialActivityType } from "@models/FinancialActivityType";
import { IoCaretDown } from "react-icons/io5";
import DatePicker from "react-datepicker";
import RemoveFinancialActivity from "./RemoveFinancialActivity";
import { FinancialActivity } from "@models/FinancialActivity";
import { useUserStore } from "@store/User";
import { Frequency } from "@models/Frequency";

import "react-datepicker/dist/react-datepicker.css";

export const BOX_STYLE =
  "w-full h-10 rounded-md pl-3 pr-2 bg-white dark:bg-zinc-700";

function NewUserFinancialActivity() {
  const { financialActivities: fa } = useUserStore();
  const financialActivity = fa[0];
  const { financialActivities, setFinancialActivities } = useUserStore();
  const setFinancialActivity = (financialActivity: FinancialActivity) => {
    setFinancialActivities(
      financialActivities.map((f) =>
        f.id === financialActivity.id ? financialActivity : f
      )
    );
  };
  return (
    <div className="flex flex-col m-4 bg-neutral-100 dark:bg-gray-900 p-4 pt-3 rounded-lg transition-opacity duration-500 opacity-100">
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
          selected={financialActivity.startDate}
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
          selected={financialActivity.endDate}
          onChange={(date: any) =>
            setFinancialActivity({
              ...financialActivity,
              endDate: date,
            })
          }
        />
      </div>
      <div className="flex">
        <RemoveFinancialActivity financialActivity={financialActivity} />
      </div>
    </div>
  );
}

export default NewUserFinancialActivity;
