import React from "react";

export const TransactionHistory = () => {
  return (
    <React.Fragment>
      <h3>Transaction History</h3>
      <hr></hr>
      <div>
        <ul className="list">
          <li className="plus">
            Project Income
            <span>+$1,0000.0</span>
            <button>X</button>
          </li>
          <li className="minus">
            Blood Test
            <span>-$500</span>
            <button>X</button>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
