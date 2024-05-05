import React from "react";
import { View, Text } from "react-native";

const ExpensesSummary = ({ expenses, expensesPeriod }) => {
  const expensesSum = expenses.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );

  return (
    <View>
      <Text> {expensesPeriod} </Text>
      <Text> ${expensesSum.toFixed(2)} </Text>
    </View>
  );
};

export default ExpensesSummary;
