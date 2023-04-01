import React from "react";
import { StyleSheet, Text } from "react-native";
import { COLORS, SIZES } from "../constants";
import { borderWidth } from "../constants/theme";

interface ErrorMessageProps {
  error?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return <Text style={styles.errorMessage}>Something went wrong. {error}</Text>;
};

const styles = StyleSheet.create({
  errorMessage: {
    color: COLORS.red,
    fontSize: SIZES.medium,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: SIZES.xLarge,
    paddingHorizontal: SIZES.medium,
    borderWidth: borderWidth("standard"),
    borderColor: COLORS.red,
    borderRadius: SIZES.small,
    marginHorizontal: SIZES.xLarge,
    padding: SIZES.small,
  },
});
