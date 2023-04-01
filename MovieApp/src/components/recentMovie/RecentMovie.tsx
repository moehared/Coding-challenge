import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { SimpleList } from "../list/SimpleList";
import { Movie } from "../../models/Movie";
import { MovieCard } from "./MovieCard";
import { COLORS, SIZES } from "../../constants";

interface RecentMovieProps {
  data: Movie[];
  loading: boolean;
  error: any | null;
}

export const RecentMovie = ({ data, loading, error }: RecentMovieProps) => {
  const renderContent = () => {
    if (loading) {
      return <ActivityIndicator size="large" color={COLORS.primary} />;
    }
    if (error) {
      return <Text>{`Something went wrong: ${error}`}</Text>;
    }
    return (
      <SimpleList
        data={data}
        renderRow={(movie, index, showBorder) => <MovieCard movie={movie} />}
        keyExtractor={(movie) => movie.imdbID}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <View>{renderContent()}</View>
    </View>
  );
};

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>Recent Movies</Text>
    <TouchableOpacity>
      <Text style={styles.headerBtn}>Show all</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SIZES.small,
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
    gap: SIZES.small,
  },
});
