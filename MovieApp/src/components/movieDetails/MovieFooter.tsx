import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { COLORS, SIZES } from "../../constants";
import Icon from "react-native-vector-icons/FontAwesome";
import { useFavorite } from "../../state/local/favourite_context";
import { MovieDetail } from "../../models/MovieDetails";

interface MovieFooterProps {
  movieDetails: MovieDetail;
}

export const MovieFooter = ({ movieDetails }: MovieFooterProps) => {
  const { isFavorite, addFavorite, removeFavorite } = useFavorite();

  const toggleFavorite = () => {
    if (isFavorite(movieDetails.imdbID)) {
      removeFavorite(movieDetails.imdbID);
    } else {
      addFavorite(movieDetails);
    }
  };

  const favorite = isFavorite(movieDetails?.imdbID);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn} onPress={toggleFavorite}>
        <Icon
          name={favorite ? "heart" : "heart-o"}
          size={SIZES.large}
          color={favorite ? COLORS.primary : "#000"}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: SIZES.small,
    backgroundColor: "#FFF",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  likeBtn: {
    width: 55,
    height: 55,
    borderWidth: 1,
    borderColor: "#F37453",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
});
