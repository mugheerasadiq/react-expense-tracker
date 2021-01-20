import "./App.css";
import Balance from "./components/balance";
import Header from "./components/header";
import { AccountSummary } from "./components/accountSummary";
import { TransactionHistory } from "./components/transactionHistory";
import { AddTransaction } from "./components/addTransaction";

function App() {
  return (
    <div className="container">
      <Header />
      <Balance />
      <AccountSummary />
      <TransactionHistory />
      <AddTransaction />
    </div>
  );
}

export default App;
