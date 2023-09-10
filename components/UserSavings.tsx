"use client";

import { useUserStore } from "@store/User";
import UserSaving from "./NewUserSaving";

function UserSavings() {
  const { savings } = useUserStore();

  return (
    <section className="flex-1 w-full mt-4">
      <div className="flex flex-col">
        <div className="overflow-auto">
          <div className="flex space-x-4 ml-4">
            {savings.map((saving, index) => {
              return <UserSaving saving={saving} canAddSaving={false} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserSavings;
