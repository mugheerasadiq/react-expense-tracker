import React from "react";

const Balance = (balance) => {
  return (
    <React.Fragment>
      <h2>Current Balance: </h2>
      <h2>${balance}</h2>
    </React.Fragment>
  );
};

export default Balance;
