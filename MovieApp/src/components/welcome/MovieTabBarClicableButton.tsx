import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants";
import ActiveMovieTabText from "./ActiveMovieTabText";

interface MovieTabBarClicableButtonProps {
  activeMovieTab: string;
  selectedTab: string;
  setActiveMovieTab: (tab: string) => void;
  onPress: () => void;
}

export const MovieTabBarClicableButton = ({
  activeMovieTab,
  selectedTab,
  setActiveMovieTab,
  onPress,
}: MovieTabBarClicableButtonProps) => {
  const borderColor =
    activeMovieTab === selectedTab ? COLORS.secondary : COLORS.gray2;
  return (
    <TouchableOpacity
      style={[styles.tab, { borderColor }]}
      onPress={() => {
        setActiveMovieTab(selectedTab);
        onPress();
      }}
    >
      <ActiveMovieTabText
        activeMovieTab={activeMovieTab}
        selectedTab={selectedTab}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tab: {
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
  },
});
