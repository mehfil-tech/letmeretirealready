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
              setSavings([{ ...savings[0], saving: e?.target?.value }]);
            }}
            type="number"
          />
        </div>
        <div>
          <div className="text-xs text-slate-400">Expected interest rate</div>
          <input
            placeholder="12%"
            value={savings[0].interestRate}
            onChange={(e) => {
              setSavings([{ ...savings[0], interestRate: e?.target?.value }]);
            }}
            type="number"
          />
        </div>
      </div>
    </section>
  );
}

export default Savings;
