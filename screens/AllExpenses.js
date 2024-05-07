import React, { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput";
import { ExpenseContext } from "../store/expense-context";

const AllExpenses = () => {
  const expensesCtx = useContext(ExpenseContext);

  return (
    <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod="All" />
  );
};

export default AllExpenses;
