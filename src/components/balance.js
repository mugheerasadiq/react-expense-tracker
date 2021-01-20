import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  let balance = 0;

  for (let i = 0; i < transactions.length; i++) {
    balance += parseInt(transactions[i].amount);
  }

  return (
    <React.Fragment>
      <h2>CURRENT BALANCE </h2>
      <h1 className="balance_h">${balance}</h1>
    </React.Fragment>
  );
};

export default Balance;
