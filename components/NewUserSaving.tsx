import { SavingType } from "@models/SavingType";
import { IoCaretDown } from "react-icons/io5";
import DatePicker from "react-datepicker";
import RemoveSaving from "./RemoveSaving";
import { Saving } from "@models/Saving";
import { useUserStore } from "@store/User";
import { Frequency } from "@models/Frequency";

import "react-datepicker/dist/react-datepicker.css";

export const BOX_STYLE = "h-10 rounded-md pl-3 pr-2 bg-white dark:bg-zinc-700";

function NewUserSaving({
  saving,
  canAddSaving,
}: {
  saving: Saving;
  canAddSaving: boolean;
}) {
  const { savings, setSavings } = useUserStore();
  const setSaving = (saving: Saving) => {
    setSavings(savings.map((s) => (s.id === saving.id ? saving : s)));
  };
  return (
    <div className="flex flex-col bg-neutral-100 dark:bg-gray-900 mb-4 p-4 pt-3 rounded-lg transition-opacity duration-500 opacity-100">
      <div className="flex gap-3 w-full">
        <div className="w-full">
          <div className="text-xs mb-0.5">Name</div>
          <div className="flex gap-3">
            <input
              className={`${BOX_STYLE} w-full`}
              placeholder="Mutual funds"
              value={saving?.name}
              onChange={(e) => {
                setSaving({ ...saving, name: e?.target?.value ?? "" });
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
            className={`${BOX_STYLE} w-full`}
            placeholder="1000"
            value={saving?.amount}
            onChange={(e) => {
              setSaving({ ...saving, amount: Number(e?.target?.value) });
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
          value={saving?.interestRate}
          onChange={(e) => {
            setSaving({
              ...saving,
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
            className={`${BOX_STYLE} appearance-none  w-full`}
            value={saving?.frequency}
            onChange={(e) => {
              setSaving({
                ...saving,
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
            className={`${BOX_STYLE} appearance-none w-full`}
            value={saving?.type}
            onChange={(e) => {
              setSaving({
                ...saving,
                type: e?.target?.value as SavingType,
              });
            }}
          >
            {Object.values(SavingType).map((type) => (
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

      <div className="flex-1">
        <div className="text-xs mb-0.5 mt-2">Start Date</div>
        <DatePicker
          className={`${BOX_STYLE}`}
          selected={saving.startDate}
          onChange={(date: any) =>
            setSaving({
              ...saving,
              startDate: date,
            })
          }
        />
      </div>
      <div className="flex-1">
        <div className="text-xs mb-0.5 mt-2">End Date</div>
        <DatePicker
          className={`${BOX_STYLE} -z-10`}
          selected={saving.endDate}
          onChange={(date: any) =>
            setSaving({
              ...saving,
              endDate: date,
            })
          }
        />
      </div>

      <div className="flex">
        <RemoveSaving saving={saving} />
      </div>
    </div>
  );
}

export default NewUserSaving;
