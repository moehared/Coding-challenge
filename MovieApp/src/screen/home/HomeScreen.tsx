import { SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants";
import { Welcome } from "../../components/welcome/Welcome";
import { PopularMovie } from "../../components/popularMovie/PopularMovie";
import { dummyMovieData } from "../../state/dummy_data";
import { RecentMovie } from "../../components/recentMovie/RecentMovie";
import { StatusBar } from "react-native";
export const HomeScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: COLORS.lightWhite,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Welcome />
            {/* just dummy data for now to display UI */}
            <PopularMovie data={dummyMovieData} error={null} loading={false} />
            <RecentMovie data={dummyMovieData} error={null} loading={false} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.medium,
  },
});
