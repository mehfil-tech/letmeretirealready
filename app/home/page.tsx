"use client";
import AddSaving from "@components/AddSaving";
import UserInfo from "@components/UserInfo";
import Savings from "@components/UserFinancialActivities";

function Home() {
  return (
    <section className="grid sm:grid-cols-2 h-[80vh]">
      <div className="flex sm:items-center w-3/4 sm:m-auto">
        <UserInfo />
      </div>
      <div className="sm:overflow-y-auto">
        <AddSaving />
        <Savings />
      </div>
    </section>
  );
}

export default Home;
