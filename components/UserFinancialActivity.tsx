import { FinancialActivity } from "@models/FinancialActivity";
import RemoveFinancialActivity from "./RemoveFinancialActivity";

function UserFinancialActivity({ activity }: { activity: FinancialActivity }) {
  return (
    <div className="flex flex-col bg-gray-100 dark:bg-gray-900 p-4 rounded-lg">
      <div className="flex flex-row justify-between items-center">
        <div className="pl-2 pr-2 pt-1 pb-1 bg-green-300 dark:bg-green-600 rounded-md w-fit mb-2">
          {activity.type ?? ""}
        </div>
        <RemoveFinancialActivity financialActivity={activity} />
      </div>
      <div className="flex items-center">{activity.name ?? ""} </div>
      <div className="text-3xl mb-2">
        {new Intl.NumberFormat("en-IN").format(activity.amount ?? 0)}
      </div>
      <div>
        Invested {(activity.frequency ?? "").toLowerCase()} at{" "}
        {activity.interestRate ?? 0}% interest rate
      </div>
    </div>
  );
}

export default UserFinancialActivity;
