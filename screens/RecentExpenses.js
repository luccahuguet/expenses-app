import React from "react";
import { View, Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput";

const RecentExpenses = () => {
  return <ExpensesOutput expensesPeriod="Recent" />;
};

export default RecentExpenses;
