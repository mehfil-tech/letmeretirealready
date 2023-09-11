"use client";
import AddSaving from "@components/AddSaving";
import UserInfo from "@components/UserInfo";
import Savings from "@components/UserFinancialActivities";

function Home() {
  return (
    <section className="w-full flex-col">
      <UserInfo />
      <AddSaving />
      <Savings />
    </section>
  );
}

export default Home;
