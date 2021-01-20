import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./transaction";

export const TransactionHistory = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <React.Fragment>
      <h3>Transaction History</h3>
      <hr></hr>
      <div>
        <ul className="list">
          {transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};
