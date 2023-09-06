"use client";

import { useUseStore } from "@store/User";
import { useState } from "react";

function Expenses() {
  const { expenses, setExpenses, inflation, setInflation } = useUseStore();
  return (
    <section className="flex-1 mt-6">
      <div>Expenses</div>
      <div className="flex items-start gap-4">
        <div>
          <div className="text-xs mb-1">Monthly Expenses</div>
          <input
            className="rounded-md pl-2 pr-2 bg-zinc-200 dark:bg-zinc-700"
            placeholder="30000"
            type="numeric"
            value={expenses}
            onChange={(e) => {
              setExpenses(e?.target?.value);
            }}
          />
        </div>
        <div>
          <div className="text-xs mb-1">Inflation %</div>
          <input
            className="w-16 rounded-md pl-2 pr-2 bg-zinc-200 dark:bg-zinc-700"
            placeholder="3"
            type="numeric"
            value={inflation}
            onChange={(e) => {
              setInflation(e?.target?.value);
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Expenses;
