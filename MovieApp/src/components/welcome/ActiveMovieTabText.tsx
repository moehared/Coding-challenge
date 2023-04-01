import { StyleSheet, Text, TextStyle, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants";

interface ActiveMovieTabTextProps {
  activeMovieTab: string;
  selectedTab: string;
}

const ActiveMovieTabText = ({
  activeMovieTab,
  selectedTab,
}: ActiveMovieTabTextProps) => {
  const borderColor =
    activeMovieTab === selectedTab ? COLORS.secondary : COLORS.gray2;
  return <Text style={[styles.tabText, { borderColor }]}>{selectedTab}</Text>;
};

export default ActiveMovieTabText;

const styles = StyleSheet.create({
  tabText: {
    fontSize: 16,
    color: COLORS.secondary,
  },
});
