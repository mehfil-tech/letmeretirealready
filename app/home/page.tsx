import { Suspense } from "react";
import Expenses from "./Expenses";

const Home = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Expenses />
      </Suspense>
    </div>
  );
};

export default Home;
