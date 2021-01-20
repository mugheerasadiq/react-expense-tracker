import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const TransactionType = transaction.amount > 0 ? "plus" : "minus";
  const { delTransaction } = useContext(GlobalContext);

  return (
    <li className={TransactionType}>
      {transaction.description}
      <span>${transaction.amount}</span>
      <button onClick={() => delTransaction(transaction.id)}>X</button>
    </li>
  );
};
