"use client";

import { useUseStore } from "@store/User";
import { useState } from "react";

function Expenses() {
  const { expenses, setExpenses, inflation, setInflation } = useUseStore();
  return (
    <section className="flex-1">
      <div>Expenses</div>
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <div className="text-xs text-slate-400">Monthly Expenses</div>
          <input
            placeholder="30000"
            type="number"
            value={expenses}
            onChange={(e) => {
              setExpenses(e?.target?.value);
            }}
          />
        </div>
        <div className="flex-1">
          <div className="text-xs text-slate-400">Inflation</div>
          <input
            className="w-16"
            placeholder="3"
            type="number"
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
