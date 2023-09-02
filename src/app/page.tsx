import Expenses from "@components/Expenses";
import Header from "@components/Header";
import Savings from "@components/Savings";

function Home() {
    const retirementDate = 'Wed Aug 23 2023';
    return (<section className="w-full flex-center flex-col">
        <p>You are going to retire in {retirementDate}</p>
        <div className="flex flex-column">
            <Savings />
            <Expenses />
        </div>
    </section>);
}

export default Home;