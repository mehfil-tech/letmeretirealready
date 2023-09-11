"use client";

import AddSaving from "@components/AddSaving";
import UserInfo from "@components/UserInfo";
import UserSaving from "@components/UserFinancialActivity";
import { useUserStore } from "@store/User";

function UserSavings() {
  const { savings } = useUserStore();

  return (
    <div className="flex flex-col columns-1 md:columns-2 lg:columns-3">
      <section className="flex">
        <UserInfo />
      </section>
      <section>
        <AddSaving />
      </section>
      <section className="flex flex-col m-4 gap-4">
        {savings.map((saving, index) => {
          return <UserSaving key={saving.id} saving={saving} />;
        })}
      </section>
    </div>
  );
}

export default UserSavings;
