import React, { useState } from "react";
import { Input, Button } from "antd";

export const AddTransaction = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <React.Fragment>
      <h3>Add a new Transaction</h3>
      <hr></hr>
      <div className="addTransaction">
        <h3>Description</h3>
        <Input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <h3>Amount</h3>
        <Input
          placeholder="Transaction Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Button>Add a New Transaction</Button>
      </div>
    </React.Fragment>
  );
};
