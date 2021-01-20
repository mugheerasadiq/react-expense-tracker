import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  let balance = 0;

  {
    transactions.map((transaction) => {
      return (balance += parseInt(transaction.amount));
    });
  }

  return (
    <React.Fragment>
      <h2>CURRENT BALANCE </h2>
      <h1 className="balance_h">${balance}</h1>
    </React.Fragment>
  );
};

export default Balance;
