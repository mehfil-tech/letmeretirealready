import Expenses from "@components/Expenses";
import UserInfo from "@components/Info";
import Savings from "@components/Savings";

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
