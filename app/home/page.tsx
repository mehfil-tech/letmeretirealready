import { Suspense } from "react";
import Expenses from "./ExpenseTable";

const Home = () => {
  return (
    <div className="flex justify-center">
      <Suspense>
        <Expenses />
      </Suspense>
    </div>
  );
};

export default Home;
