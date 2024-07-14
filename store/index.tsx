import { CreditCardProvider } from "./CreditCard";
import { EMIProvider } from "./EMI";
import { ExpenseProvider } from "./Expense";
import { IncomeProvider } from "./Income";
import { InvestmentProvider } from "./Investment";
import UserStore from "./User";

function RootStore({ children }: { children: React.ReactNode }) {
  return (
    <UserStore>
      <ExpenseProvider>
        <IncomeProvider>
          <InvestmentProvider>
            <EMIProvider>
              <CreditCardProvider>{children}</CreditCardProvider>
            </EMIProvider>
          </InvestmentProvider>
        </IncomeProvider>
      </ExpenseProvider>
    </UserStore>
  );
}

export default RootStore;
