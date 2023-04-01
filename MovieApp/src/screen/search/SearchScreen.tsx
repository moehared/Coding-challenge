import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { MovieCard } from "../../components/recentMovie/MovieCard";
import { ErrorMessage } from "../../components/ErrorMessage";
import { COLORS, SIZES } from "../../constants";
import { Movie } from "../../models/Movie";
import { baseUrl, useFetch } from "../../hooks/useFetch";
import { AppRoutesRouteProp } from "../../navigation/AppRoute";
import { API_KEY } from "../../constants/apiKey";

const SearchScreen = () => {
  const {
    params: { searchTerm },
  } = useRoute<AppRoutesRouteProp<"search">>();
  const [page, setPage] = useState(1);

  const { status, data, error, refetch } = useFetch<Movie[]>(
    `${baseUrl}/?apikey=${API_KEY}&s=${searchTerm}&page=${page}`
  );

  const handlePagination = (direction: string) => {
    if (direction === "left" && page > 1) {
      setPage(page - 1);
      refetch?.();
    } else if (direction === "right") {
      setPage(page + 1);
      refetch?.();
    }
  };

  const searchContent = () => {
    switch (status) {
      case "loading":
        return (
          <ActivityIndicator
            style={styles.loader}
            size="large"
            color={COLORS.primary}
          />
        );
      case "error":
        return <ErrorMessage error={error} />;
      case "success":
        return (
          <FlatList
            data={data}
            renderItem={({ item }) => <MovieCard movie={item} />}
            keyExtractor={(item) => item.imdbID}
            contentContainerStyle={styles.listContent}
            ListHeaderComponent={<Header searchTerm={searchTerm} />}
            ListFooterComponent={
              <Footer onPageChange={handlePagination} page={page} />
            }
          />
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>{searchContent()}</SafeAreaView>
  );
};

export default SearchScreen;

const Header = ({ searchTerm }: { searchTerm: string }) => (
  <View style={styles.header}>
    <Text style={styles.searchTitle}>{searchTerm}</Text>
    <Text style={styles.noOfSearchedMovies}>Search Result</Text>
  </View>
);

const Footer = ({
  onPageChange,
  page,
}: {
  onPageChange: (direction: string) => void;
  page: number;
}) => (
  <View style={styles.footer}>
    <PaginationButton direction="left" onPress={() => onPageChange("left")} />
    <Text style={styles.paginationText}>{page}</Text>
    <PaginationButton direction="right" onPress={() => onPageChange("right")} />
  </View>
);

const PaginationButton = ({
  direction,
  onPress,
}: {
  direction: "left" | "right";
  onPress: () => void;
}) => (
  <TouchableOpacity style={styles.paginationButton} onPress={onPress}>
    <Icon name={`chevron-${direction}`} style={styles.paginationImage} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  header: {
    width: "100%",
  },
  searchTitle: {
    fontWeight: "bold",
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
  },
  noOfSearchedMovies: {
    marginTop: 2,
    fontSize: SIZES.small,
    color: COLORS.primary,
  },
  loader: {
    marginTop: SIZES.medium,
  },
  listContent: {
    padding: SIZES.medium,
  },
  footer: {
    marginTop: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  paginationButton: {
    width: 30,
    height: 30,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.tertiary,
  },
  paginationImage: {
    width: "60%",
    height: "60%",
    tintColor: COLORS.white,
  },
  paginationText: {
    fontWeight: "bold",
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },
});
