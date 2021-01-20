import "./App.css";
import Balance from "./components/balance";
import Header from "./components/header";
import { AccountSummary } from "./components/accountSummary";
import { TransactionHistory } from "./components/transactionHistory";
import { AddTransaction } from "./components/addTransaction";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div className="container">
      <Header />
      <GlobalProvider>
        <Balance />
        <AccountSummary />
        <TransactionHistory />
        <AddTransaction />
      </GlobalProvider>
    </div>
  );
}

export default App;
