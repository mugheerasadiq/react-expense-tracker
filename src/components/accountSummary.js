import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AccountSummary = () => {
  const { transactions } = useContext(GlobalContext);
  let income = 0,
    expense = 0;

  for (let i = 0; i < transactions.length; i++) {
    income +=
      parseInt(transactions[i].amount) > 0
        ? parseInt(transactions[i].amount)
        : 0;
    expense +=
      parseInt(transactions[i].amount) < 0
        ? parseInt(transactions[i].amount)
        : 0;
  }

  return (
    <div className="account_summary">
      <div>
        <h2>Income</h2>
        <p className="money plus">{income}</p>
      </div>
      <div>
        <h2>Expense</h2>
        <p className="money minus">{Math.abs(expense)}</p>
      </div>
    </div>
  );
};
