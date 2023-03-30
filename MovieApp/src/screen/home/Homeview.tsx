import { SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants";
import { Welcome } from "../../components/welcome/Welcome";
import { PopularMovie } from "../../components/popularMovie/PopularMovie";
import { dummyMovieData } from "../../state/dummy_data";
import { RecentlyReleaseMovie } from "../../components/RecentlyReleaseMovie";
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
          <PopularMovie
            data={dummyMovieData}
            error={null}
            loading={false}
            onPress={() => {}}
          />
          <RecentlyReleaseMovie />
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
