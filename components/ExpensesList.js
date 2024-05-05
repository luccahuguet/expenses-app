import React from "react";
import { FlatList } from "react-native";
import { View, Text } from "react-native";

const renderExpenseItem = (itemData) => {
  return (
    //   <Text>{itemData.item.title}</Text>
    //   <Text>{itemData.item.amount}</Text>
    //   <Text>{itemData.item.date}</Text>
    <Text>{itemData.item.description}</Text>
  );
};

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;
