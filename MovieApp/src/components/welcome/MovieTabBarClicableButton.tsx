import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants";
import ActiveMovieTabText from "./ActiveMovieTabText";

interface MovieTabBarClickableButtonProps {
  activeTab: string;
  selectedTab: string;
  onPress: () => void;
}

export const MovieTabBarClickableButton = ({
  activeTab,
  selectedTab,
  onPress,
}: MovieTabBarClickableButtonProps) => {
  const borderColor =
    activeTab === selectedTab ? COLORS.secondary : COLORS.gray2;
  return (
    <TouchableOpacity
      style={[
        styles.tab,
        {
          borderColor,
        },
      ]}
      onPress={onPress}
    >
      <ActiveMovieTabText
        activeMovieTab={activeTab}
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
