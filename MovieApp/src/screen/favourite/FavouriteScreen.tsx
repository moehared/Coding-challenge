import React from "react";
import { StyleSheet, SafeAreaView, View, Text, FlatList } from "react-native";
import { useFavorite } from "../../state/local/favourite_context";
import { PopularMovieCard } from "../../components/popularMovie/PopularMovieCard";
import { COLORS, SIZES } from "../../constants";
import { CustomFlatList } from "../../components/list/CustomFlatList";

export const FavouriteScreen = () => {
  const { favoriteMovies } = useFavorite();

  const renderEmptyList = () => (
    <View style={styles.emptyListContainer}>
      <Text style={styles.emptyListText}>No favourite movie</Text>
    </View>
  );

  const renderMovieList = () => (
    <>
      <Text style={styles.favouriteMessage}>
        Here are your favourite movies list
      </Text>
      <CustomFlatList
        data={favoriteMovies}
        renderRow={(item, _1, _2) => (
          <PopularMovieCard movie={item} width="45%" />
        )}
        keyExtractor={(item) => item.imdbID}
        numColumns={2}
        contentContainerStyle={styles.flatListContent}
      />
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      {favoriteMovies.length === 0 ? renderEmptyList() : renderMovieList()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  emptyListContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  emptyListText: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  favouriteMessage: {
    marginVertical: SIZES.medium,
    marginHorizontal: SIZES.medium,
    fontWeight: "bold",
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
  },
  flatListContent: {
    paddingHorizontal: SIZES.medium,
  },
});
