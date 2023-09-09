import Expenses from "@components/Expenses";
import UserInfo from "@components/UserInfo";
import Savings from "@components/UserSavings";

function Home() {
  return (
    <section className="w-full flex-col">
      <UserInfo />
      <div className="flex-wrap gap-x-4">
        <Expenses />
        <Savings />
      </div>
    </section>
  );
}

export default Home;
