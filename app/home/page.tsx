"use client";
import AddSaving from "@components/AddSaving";
import UserInfo from "@components/UserInfo";
import Savings from "@components/UserFinancialActivities";

function Home() {
  return (
    <section className="grid grid-cols-2 h-[80vh]">
      <div className="flex items-center">
        <UserInfo />
      </div>
      <div className="overflow-y-auto">
        <AddSaving />
        <Savings />
      </div>
    </section>
  );
}

export default Home;
