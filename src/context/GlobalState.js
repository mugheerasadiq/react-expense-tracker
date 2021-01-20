import React, { useReducer, useContext } from "react";

//Create the initial state
const initalState = {
  transactions: [
    { id: 1, description: "Project 1 Income", amount: 1000 },
    { id: 2, description: "Project 2 Income", amount: 2000 },
    { id: 3, description: "Project 3 Income", amount: -1000 },
    { id: 4, description: "Project 4 Income", amount: -500 },
  ],
};

export const GlobalContext = createContext(initalState);
