"use client";

import { useUseStore } from "@store/User";

function Savings() {
  const { savings, setSavings } = useUseStore();
  return (
    <section className="flex-1">
      <div>Savings</div>
      <div className="flex gap-4">
        <div>
          <div className="text-xs mb-1">SIP Amount</div>
          <input
            className="rounded-md pl-2 pr-2 bg-zinc-200 dark:bg-zinc-700"
            placeholder="1000"
            value={savings[0].saving}
            onChange={(e) => {
              setSavings([{ ...savings[0], saving: Number(e?.target?.value) }]);
            }}
            type="numeric"
          />
        </div>
        <div>
          <div className="text-xs mb-1">Interest %</div>
          <input
            placeholder="12%"
            className="w-16 rounded-md pl-2 pr-2 bg-zinc-200 dark:bg-zinc-700"
            value={savings[0].interestRate}
            onChange={(e) => {
              setSavings([
                { ...savings[0], interestRate: Number(e?.target?.value) },
              ]);
            }}
            type="numeric"
          />
        </div>
      </div>
    </section>
  );
}

export default Savings;
