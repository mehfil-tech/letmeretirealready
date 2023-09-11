import { FinancialActivity } from "@models/FinancialActivity";

function UserFinancialActivity({ activity }: { activity: FinancialActivity }) {
  return (
    <div className="flex flex-col bg-gray-900 p-4 rounded-lg">
      <div className="pl-1 pr-1 bg-slate-700 rounded-md w-fit mb-2">
        {activity.type ?? ""}
      </div>
      <div className="flex items-center">{activity.name ?? ""} </div>
      <div className="text-3xl mb-2">{activity.amount ?? 0}</div>
      <div>
        Invested {(activity.frequency ?? "").toLowerCase()} at{" "}
        {activity.interestRate ?? 0}% interest rate
      </div>
    </div>
  );
}

export default UserFinancialActivity;
