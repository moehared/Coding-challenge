import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import { Movie } from "../../models/Movie";
import { checkImageURL } from "../../utils";
import { COLORS, SHADOWS, SIZES } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { AppRoutesNavigationProp } from "../../navigation/AppRoute";
export const defaultLogo =
  "https://w1.pngwing.com/pngs/913/269/png-transparent-movie-logo-graphic-film-cinema-movie-projector-outdoor-cinema-movie-camera-projection-screens-home-movies-thumbnail.png";

interface PopularMovieCardProps {
  movie: Movie;
  width?: number | string;
  height?: number | string;
}

export const PopularMovieCard = ({
  movie,
  width = 250,
  height = 250,
}: PopularMovieCardProps) => {
  const navigate = useNavigation<AppRoutesNavigationProp>();

  const navigateToMovieDetails = () => {
    navigate.navigate("Details", {
      imdbID: movie.imdbID,
    });
  };

  return (
    <TouchableOpacity
      style={[styles.container, { width: width, height: height }]}
      onPress={navigateToMovieDetails}
    >
      <ImageBackground
        source={{
          uri: checkImageURL(movie.Poster) ? movie.Poster : defaultLogo,
        }}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <View style={styles.movieDetails}>
          <Text style={styles.movieTitle} numberOfLines={2}>
            {movie.Title}
          </Text>
          <Text style={styles.movieYear}>{movie.Year}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: SIZES.medium,
    overflow: "hidden",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
    margin: SIZES.small,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
  movieDetails: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: SIZES.medium,
  },
  movieTitle: {
    fontSize: SIZES.medium,
    fontWeight: "bold",
    color: COLORS.white,
  },
  movieYear: {
    fontSize: SIZES.small,
    color: COLORS.white,
    marginTop: SIZES.small / 2,
  },
});
