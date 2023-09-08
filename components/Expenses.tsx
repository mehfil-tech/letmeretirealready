"use client";

import { useUserStore } from "@store/User";
import { BOX_STYLE } from "./UserSaving";

function Expenses() {
  const { expenses, setExpenses, inflation, setInflation } = useUserStore();
  return (
    <section className="flex-1 ml-4">
      <div>Expenses</div>
      <div className="flex items-start gap-4">
        <div>
          <div className="text-xs mb-1 mt-1">Amount</div>
          <input
            className={`${BOX_STYLE} w-32`}
            placeholder="30000"
            type="numeric"
            value={expenses}
            onChange={(e) => {
              setExpenses(Number(e?.target?.value));
            }}
          />
        </div>
        <div>
          <div className="text-xs mb-1 mt-1">Inflation %</div>
          <input
            className={BOX_STYLE}
            placeholder="3"
            type="numeric"
            value={inflation}
            onChange={(e) => {
              setInflation(Number(e?.target?.value));
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Expenses;
