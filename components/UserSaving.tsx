import { Saving } from "@models/Saving";

function UserSaving({ saving }: { saving: Saving }) {
  return (
    <div className="flex flex-col bg-gray-900 p-4 rounded-lg">
      <div className="pl-1 pr-1 bg-slate-700 rounded-md w-fit mb-2">
        {saving?.type}
      </div>
      <div className="flex items-center">{saving?.name} </div>
      <div className="text-3xl mb-2">$ {saving?.amount}</div>
      <div>
        Invested {saving?.frequency?.toLowerCase()} at {saving?.interestRate}%
        interest rate
      </div>
    </div>
  );
}

export default UserSaving;
