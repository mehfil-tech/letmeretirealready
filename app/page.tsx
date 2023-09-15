"use client";
import AddSaving from "@components/AddSaving";
import UserInfo from "@components/UserInfo";
import Savings from "@components/UserFinancialActivities";
import useAuth from "@lib/useAuth";

function Home() {
  const { user } = useAuth();
  return (
    <section className="grid sm:grid-cols-2 sm:h-[80vh] sm:overflow-hidden">
      Landing Page decider
    </section>
  );
}

export default Home;
