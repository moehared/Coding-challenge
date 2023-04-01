import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { MovieDetail as MovieDetailData } from "../../models/MovieDetails";
import { COLORS, SIZES } from "../../constants";

interface MovieDetailProps {
  movieDetails: MovieDetailData;
}

export const MovieDetail = ({ movieDetails }: MovieDetailProps) => {
  const renderMovieDetail = (label: string, content: string) => (
    <Text style={styles.detailText}>
      {label}: <Text style={styles.contentText}>{content}</Text>
    </Text>
  );

  return (
    <View style={styles.container}>
      <Image source={{ uri: movieDetails.Poster }} style={styles.poster} />
      <Text style={styles.headerText}>{movieDetails.Title}</Text>
      {renderMovieDetail("Year", movieDetails.Year)}
      {renderMovieDetail("Genre", movieDetails.Genre)}
      {renderMovieDetail("Country", movieDetails.Country)}
      {renderMovieDetail("Language", movieDetails.Language)}
      {renderMovieDetail("Runtime", movieDetails.Runtime)}
      {renderMovieDetail("Rated", movieDetails.Rated)}
      {renderMovieDetail("Released", movieDetails.Released)}
      {renderMovieDetail("BoxOffice", movieDetails.BoxOffice)}
      {renderMovieDetail("Production", movieDetails.Production)}
      {renderMovieDetail("Awards", movieDetails.Awards)}
      {renderMovieDetail("IMDB Rating", movieDetails.imdbRating)}
      {renderMovieDetail("IMDB Votes", movieDetails.imdbVotes)}
      {renderMovieDetail("IMDB ID", movieDetails.imdbID)}
      {renderMovieDetail("Type", movieDetails.Type)}
      {renderMovieDetail("DVD", movieDetails.DVD)}
      {renderMovieDetail("Website", movieDetails.Website)}
      {renderMovieDetail("Response", movieDetails.Response)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.large,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
  },
  headerText: {
    fontSize: SIZES.large,
    color: COLORS.primary,
  },
  detailText: {
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    marginVertical: SIZES.small / 1.25,
  },
  contentText: {
    color: COLORS.gray,
  },
  poster: {
    width: 200,
    height: 300,
    marginBottom: SIZES.small,
  },
});
