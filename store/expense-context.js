import React, { createContext, useReducer, useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Toilet Paper",
    amount: 94.12,
    date: new Date(2024, 4, 2),
  },
  {
    id: "e2",
    description: "New TV",
    amount: 799.49,
    date: new Date(2024, 3, 12),
  },
  {
    id: "e3",
    description: "Car Insurance",
    amount: 294.67,
    date: new Date(2024, 4, 3),
  },
  {
    id: "e4",
    description: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2024, 0, 12),
  },
  {
    id: "e5",
    description: "Toilet Paper",
    amount: 94.12,
    date: new Date(2024, 4, 2),
  },
  {
    id: "e6",
    description: "New TV",
    amount: 799.49,
    date: new Date(2024, 3, 12),
  },
  {
    id: "e7",
    description: "Car Insurance",
    amount: 294.67,
    date: new Date(2024, 4, 3),
  },
  {
    id: "e8",
    description: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2024, 0, 12),
  },
  {
    id: "e9",
    description: "Toilet Paper",
    amount: 94.12,
    date: new Date(2024, 4, 2),
  },
  {
    id: "e10",
    description: "New TV",
    amount: 799.49,
    date: new Date(2024, 3, 12),
  },
  {
    id: "e11",
    description: "Car Insurance",
    amount: 294.67,
    date: new Date(2024, 4, 3),
  },
  {
    id: "e12",
    description: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2024, 0, 12),
  },
  {
    id: "e13",
    description: "Toilet Paper",
    amount: 94.12,
    date: new Date(2024, 4, 2),
  },
  {
    id: "e14",
    description: "New TV",
    amount: 799.49,
    date: new Date(2024, 3, 12),
  },
  {
    id: "e15",
    description: "Car Insurance",
    amount: 294.67,
    date: new Date(2024, 4, 3),
  },
  {
    id: "e16",
    description: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2024, 0, 12),
  },
];

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = Date.toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    case "UPDATE":
      const expenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatedExpense = { ...state[expenseIndex], ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[expenseIndex] = updatedExpense;
      return updatedExpenses;
    default:
      return state;
  }
};

const ExpenseContextProvider = ({ children }) => {
  const [espensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  const addExpense = (expenseData) => {
    dispatch({
      type: "ADD",
      payload: expenseData,
    });
  };

  const deleteExpense = (id) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  const updateExpense = (id, expenseData) => {
    dispatch({
      type: "UPDATE",
      payload: { id: id, data: expenseData },
    });
  };

  const value = {
    expenses: espensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
};

export default ExpenseContextProvider;
