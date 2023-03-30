import type { ReactNode } from "react";
import React from "react";
import { StyleSheet, View } from "react-native";
import { COLORS } from "../../../constants";
import { borderWidth, SIZES } from "../../../constants/theme";

interface CardProps {
  verticalInset?: boolean;
  horizontalInset?: boolean;
  verticalMargin?: boolean;
  color?: string;
  children: ReactNode;
}

export const Card = ({
  verticalInset = false,
  horizontalInset = false,
  verticalMargin = false,
  color = COLORS.white,
  children,
}: CardProps) => {
  return (
    <View
      style={[
        styles.container,
        { borderColor: color },
        verticalInset && styles.verticalPadding,
        horizontalInset && styles.horizontalPadding,
        verticalMargin ? styles.verticalMargin : styles.bottomMargin,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: borderWidth("thin"),
    borderRadius: SIZES.medium,
    overflow: "hidden",
  },
  horizontalPadding: {
    paddingHorizontal: SIZES.small,
  },
  verticalPadding: {
    paddingVertical: SIZES.small,
  },
  verticalMargin: {
    marginVertical: SIZES.small,
  },
  bottomMargin: {
    marginBottom: SIZES.xLarge,
  },
});
