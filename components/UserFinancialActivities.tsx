"use client";

import { useUserStore } from "@store/User";
import UserFinancialActivity from "./UserFinancialActivity";

function UserFinancialActivities() {
  const { financialActivities } = useUserStore();

  return (
    <section className="flex flex-col m-4 gap-4 justify-center">
      {financialActivities.slice(1).map((activity, index) => {
        return <UserFinancialActivity key={activity.id} activity={activity} />;
      })}
    </section>
  );
}

export default UserFinancialActivities;
