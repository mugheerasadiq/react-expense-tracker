import React, { useReducer, createContext } from "react";
import AppReducer from "./AppReducer";

// Create the initial state
const initialState = {
  transactions: [
    { id: 1, description: "Project 1 Income", amount: 1000 },
    { id: 2, description: "Project 2 Income", amount: 2000 },
    { id: 3, description: "Project 3 Income", amount: -1000 },
    { id: 4, description: "Project 4 Income", amount: -500 },
  ],
};

// Create the context
export const GlobalContext = createContext(initialState);

// Create context provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function delTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        delTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
