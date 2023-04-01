import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Movie } from "../../models/Movie";
import { COLORS, SHADOWS, SIZES } from "../../constants";
import { checkImageURL } from "../../utils";
import { defaultLogo } from "../popularMovie/PopularMovieCard";
import { useNavigation } from "@react-navigation/native";
import { AppRoutesNavigationProp } from "../../navigation/AppRoute";

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const navigate = useNavigation<AppRoutesNavigationProp>();
  const navigateToMovieDetails = () => {
    navigate.navigate("Details", {
      imdbID: movie.imdbID,
    });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={navigateToMovieDetails}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(movie.Poster) ? movie.Poster : defaultLogo,
          }}
          resizeMode="contain"
          style={styles.logImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.movieName} numberOfLines={1}>
          {movie.Title}
        </Text>

        <Text style={styles.movieType}>{movie.Type}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: "#FFF",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  logoContainer: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logImage: {
    width: "70%",
    height: "70%",
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  movieName: {
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },
  movieType: {
    fontSize: SIZES.small + 2,
    color: COLORS.gray,
    marginTop: 3,
    textTransform: "capitalize",
  },
});
