"use client";

import { useUserStore } from "@store/User";
import UserSaving from "./UserSaving";
import { AnimatePresence, motion } from "framer-motion";
import AddSaving from "./AddSaving";

function UserSavings() {
  const { savings } = useUserStore();

  return (
    <section className="flex-1 w-full mt-4 columns-1 sm:columns-2">
      <div className="flex flex-col">
        <AddSaving />
        <div className="overflow-auto">
          <div className="flex space-x-4 ml-4">
            <AnimatePresence>
              {savings.map((saving, index) => {
                return (
                  <motion.div
                    key={saving.id}
                    initial={{ opacity: 0, x: -20, y: 0 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, x: 0, y: 20 }}
                  >
                    <UserSaving saving={saving} canAddSaving={false} />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <AddSaving />
        <div>
          <div className="flex space-x-4 ml-4">
            <AnimatePresence>
              {savings.map((saving, index) => {
                return (
                  <motion.div
                    key={saving.id}
                    initial={{ opacity: 0, x: -20, y: 0 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, x: 0, y: 20 }}
                  >
                    <UserSaving saving={saving} canAddSaving={false} />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserSavings;
