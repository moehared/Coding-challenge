import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { CustomFlatList } from "../list/CustomFlatList";
import { Movie } from "../../models/Movie";
import { PopularMovieCard } from "./PopularMovieCard";
import { COLORS, SIZES } from "../../constants";

interface PopularMovieProps {
  data: Movie[];
  loading: boolean;
  error: any | null;
}

export const PopularMovie = ({ data, loading, error }: PopularMovieProps) => {
  const renderContent = () => {
    if (loading) {
      return <ActivityIndicator size="large" color={COLORS.primary} />;
    }
    if (error) {
      return <Text>{`error occured: ${error}`}</Text>;
    }
    return (
      <CustomFlatList
        data={data}
        renderRow={(item, _, showBorder) => <PopularMovieCard movie={item} />}
        keyExtractor={(item) => item.imdbID}
        horizontal
        contentContainerStyle={styles.listContent}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Movies</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>{renderContent()}</View>
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
  listContent: {
    columnGap: SIZES.medium,
  },
});
