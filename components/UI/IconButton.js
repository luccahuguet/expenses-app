import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ onPress, icon, color, size }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.buttonContainer}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
    marginTop: 5,
    marginBottom: 0,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  pressed: {
    opacity: 0.75,
  },
});

export default IconButton;
