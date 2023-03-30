import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants";
import { CustomFlatList } from "../list/CustomFlatList";
import { dummyMovieData } from "../../state/dummy_data";
import { Movie } from "../../models/Movie";
import { PopularMovieCard } from "../card/PopularMovieCard";

interface PopularMovieProps {
  data: Movie[];
  loading: boolean;
  error: any | null;
  onPress: () => void;
}

export const PopularMovie = ({
  data,
  loading,
  error,
  onPress,
}: PopularMovieProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {loading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Error</Text>
        ) : (
          <CustomFlatList
            data={dummyMovieData}
            renderRow={(item, _, showBorder) => (
              <PopularMovieCard movie={item} onPress={onPress} />
            )}
            keyExtractor={(item) => item.imdbID}
            horizontal
            contentContainerStyle={{
              columnGap: SIZES.medium,
            }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: SIZES.large,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
  },
});
