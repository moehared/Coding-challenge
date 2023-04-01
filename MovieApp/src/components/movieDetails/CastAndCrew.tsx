import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MovieDetail } from "../../models/MovieDetails";
import { COLORS, SIZES } from "../../constants";

interface CastAndCrewProps {
  movieDetails: MovieDetail;
}

export const CastAndCrew = ({ movieDetails }: CastAndCrewProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cast & Crew</Text>
      <Text style={styles.details}>
        <Text style={styles.label}>Director:</Text> {movieDetails.Director}
      </Text>
      <Text style={styles.details}>
        <Text style={styles.label}>Writer:</Text> {movieDetails.Writer}
      </Text>
      <Text style={styles.details}>
        <Text style={styles.label}>Actors:</Text> {movieDetails.Actors}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.medium,
    paddingHorizontal: SIZES.small,
  },
  title: {
    fontSize: SIZES.large,
    fontWeight: "bold",
    marginBottom: SIZES.small,
  },
  details: {
    fontSize: SIZES.medium,
    marginBottom: SIZES.small / 2,
  },
  label: {
    fontWeight: "bold",
  },
});
