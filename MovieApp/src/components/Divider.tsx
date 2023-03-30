import { StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react";

interface DividerProps {
  style?: ViewStyle | ViewStyle[];
}

const Divider = ({ style }: DividerProps) => {
  return <View style={[style, styles.divider]} />;
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "#ccc",
  },
});
