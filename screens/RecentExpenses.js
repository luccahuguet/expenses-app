import React, { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput";
import { ExpenseContext } from "../store/expense-context";

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpenseContext);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 7
    );
    return expense.date > date7DaysAgo;
  });
  return <ExpensesOutput expenses={recentExpenses} expensesPeriod="Recent" />;
};

export default RecentExpenses;
