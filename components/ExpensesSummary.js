import React from "react";
import { View, Text } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { StyleSheet } from "react-native";

const ExpensesSummary = ({ expenses, expensesPeriod }) => {
  const expensesSum = expenses.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{expensesPeriod} </Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)} </Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary600,
  },
});
