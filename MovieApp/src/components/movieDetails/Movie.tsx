import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { MovieDetail } from "../../models/MovieDetails";
import { checkImageURL } from "../../utils";
import { COLORS, SIZES } from "../../constants";
import { defaultLogo } from "../popularMovie/PopularMovieCard";
import Icon from "react-native-vector-icons/FontAwesome";

interface MovieProps {
  movieDetails: MovieDetail;
}

export const Movie = ({ movieDetails }: MovieProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: checkImageURL(movieDetails.Poster)
              ? movieDetails.Poster
              : defaultLogo,
          }}
          style={styles.logoImage}
        />
      </View>

      <View style={styles.movieTitleBox}>
        <Text style={styles.movieTitle}>{movieDetails.Title}</Text>
      </View>

      <View style={styles.genreInfoBox}>
        <Text style={styles.genreName}>{movieDetails.Genre} / </Text>
        <View style={styles.locationBox}>
          <Icon name="flag" size={SIZES.medium} />
          <Text style={styles.locationName}>{movieDetails.Country}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logoBox: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: SIZES.large,
  },
  logoImage: {
    width: "80%",
    height: "80%",
  },
  movieTitleBox: {
    marginTop: SIZES.small,
  },
  movieTitle: {
    fontSize: SIZES.large,
    color: COLORS.primary,
    textAlign: "center",
  },
  genreInfoBox: {
    marginTop: SIZES.small / 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  genreName: {
    fontSize: SIZES.medium - 2,
    color: COLORS.primary,
  },
  locationBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  locationName: {
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    marginLeft: 2,
  },
});
