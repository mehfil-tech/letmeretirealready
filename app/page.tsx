import Expenses from "@components/Expenses";
import UserInfo from "@components/Info";
import Savings from "@components/Savings";

function Home() {
  return (
    <section className="w-full flex-col">
      <div className="flex flex-column gap-x-4 p-4">
        <Savings />
        <Expenses />
      </div>
      <UserInfo />
    </section>
  );
}

export default Home;
