"use client";

import { useUserStore } from "@store/User";
import UserFinancialActivity from "./UserFinancialActivity";

function UserFinancialActivities() {
  const { financialActivities } = useUserStore();
  console.log(financialActivities[0]);
  return (
    <section className="flex flex-col m-4 gap-4 justify-center">
      {financialActivities.map((activity, index) => {
        return <UserFinancialActivity key={activity.id} activity={activity} />;
      })}
    </section>
  );
}

export default UserFinancialActivities;
