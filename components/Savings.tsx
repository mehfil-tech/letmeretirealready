"use client";

import { useUseStore } from "@store/User";

function Savings() {
  const { savings, setSavings } = useUseStore();
  return (
    <section className="flex-1">
      <div>Savings</div>
      <div className="flex gap-4">
        <div>
          <div className="text-xs text-slate-400">SIP Amount</div>
          <input
            placeholder="1000"
            value={savings[0].saving}
            onChange={(e) => {
              setSavings([{ ...savings[0], saving: Number(e?.target?.value) }]);
            }}
            type="number"
          />
        </div>
        <div>
          <div className="text-xs text-slate-400">Interest %</div>
          <input
            placeholder="12%"
            className="w-16"
            value={savings[0].interestRate}
            onChange={(e) => {
              setSavings([
                { ...savings[0], interestRate: Number(e?.target?.value) },
              ]);
            }}
            type="number"
          />
        </div>
      </div>
    </section>
  );
}

export default Savings;
