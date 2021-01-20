import React, { useContext, useState } from "react";
import { Input, Button } from "antd";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: new Date().getTime(),
      description,
      amount,
    };

    addTransaction(newTransaction);
  };
  return (
    <React.Fragment>
      <h3>Add a new Transaction</h3>
      <hr></hr>
      <div className="addTransaction">
        <form onSubmit={onSubmit}>
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
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
          <Button htmlType="submit">Add a New Transaction</Button>
        </form>
      </div>
    </React.Fragment>
  );
};
