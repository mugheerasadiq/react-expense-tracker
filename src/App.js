import "./App.css";
import Balance from "./components/balance";
import Header from "./components/header";
import { AccountSummary } from "./components/accountSummary";

function App() {
  return (
    <div className="container">
      <Header />
      <Balance />
      <AccountSummary />
    </div>
  );
}

export default App;
