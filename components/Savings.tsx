"use client";

import { useUserStore } from "@store/User";
import UserSaving from "./UserSaving";
import { PlaceholderSaving, Saving } from "@models/Saving";
import AddSaving from "./AddSaving";

function Savings() {
  const { savings } = useUserStore();

  return (
    <section className="flex-1 w-full mt-4">
      <div>
        <div className="mb-2 ml-4 flex gap-3">
          Savings ({savings.length}) <AddSaving />
        </div>
        <div className="overflow-scroll scroll-container">
          <div className="flex space-x-4 ml-4">
            {savings.map((saving, index) => {
              return (
                <UserSaving key={index} saving={saving} canAddSaving={false} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Savings;
