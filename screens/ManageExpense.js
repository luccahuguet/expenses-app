import React, { useContext, useLayoutEffect } from "react";
import { View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/UI/Button";
import { ExpenseContext } from "../store/expense-context";

const ManageExpense = ({ route, navigation }) => {
  const expensesCtx = useContext(ExpenseContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  // const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const updateHandler = () => {
    {
      isEditing
        ? expensesCtx.updateExpense(editedExpenseId, {
            description: "Updated Expense",
            amount: 1000,
            date: new Date(1999, 1, 1),
          })
        : expensesCtx.addExpense({
            description: "New Expense",
            amount: 100,
            date: new Date(),
          });
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} onPress={cancelHandler} mode="flat">
          Cancel
        </Button>
        <Button style={styles.button} onPress={updateHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={24}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    minWidth: 100,
    marginHorizontal: 10,
  },
  deleteContainer: {
    marginTop: 10,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
