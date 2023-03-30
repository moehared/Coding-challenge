import { SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants";
import { Welcome } from "../../components/welcome/Welcome";
const Homeview = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightWhite,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Welcome />
          {/* <PopularMovie />
          <RecentMovie /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homeview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.medium,
  },
});
