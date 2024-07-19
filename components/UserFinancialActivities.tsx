"use client";

import UserFinancialActivity from "./UserFinancialActivity";

function UserFinancialActivities() {
  return (
    <section className="flex flex-col m-4 gap-4 justify-center">
      {financialActivities.map((activity, index) => {
        return <UserFinancialActivity key={activity.id} activity={activity} />;
      })}
      {financialActivities.length === 0 && (
        <div className="flex flex-col bg-gray-100 dark:bg-gray-900 p-4 rounded-lg">
          <div className="text-2xl opacity-30">No savings</div>
          <div className="opacity-30">Add a saving to get started</div>
        </div>
      )}
    </section>
  );
}

export default UserFinancialActivities;
