"use client";
import AddSaving from "@components/AddSaving";
import UserInfo from "@components/UserInfo";

function Expenses() {
  return (
    <div className="flex flex-col columns-1 md:columns-2 lg:columns-3">
      <section className="flex">
        <UserInfo />
      </section>
      <section>
        <AddSaving />
      </section>
    </div>
  );
}

export default Expenses;
