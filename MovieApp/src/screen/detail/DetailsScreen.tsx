import { useCallback, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { AppRoutesRouteProp } from "../../navigation/AppRoute";
import { CastAndCrew } from "../../components/movieDetails/CastAndCrew";
import { MovieDetail } from "../../components/movieDetails/About";
import { Movie } from "../../components/movieDetails/Movie";
import { COLORS, SIZES } from "../../constants";
import { baseUrl, useFetch } from "../../hooks/useFetch";
import { MovieDetail as MovieDetailData } from "../../models/MovieDetails";
import { CustomFlatList } from "../../components/list/CustomFlatList";
import { MovieFooter } from "../../components/movieDetails/MovieFooter";
import { API_KEY } from "../../constants/apiKey";
import { MovieTabBarClickableButton } from "../../components/welcome/MovieTabBarClicableButton";
import { ErrorMessage } from "../../components/ErrorMessage";

const tabs = ["Detail", "Cast & Crew"];

export const DetailsScreen = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const {
    params: { imdbID },
  } = useRoute<AppRoutesRouteProp<"Details">>();

  const { status, data, error, refetch } = useFetch<MovieDetailData>(
    `${baseUrl}/?apikey=${API_KEY}&i=${imdbID}`
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "Detail":
        return <MovieDetail movieDetails={data} />;
      case "Cast & Crew":
        return <CastAndCrew movieDetails={data} />;
      default:
        return null;
    }
  };

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch?.();
    setRefreshing(false);
  }, []);

  const renderContent = () => {
    if (status === "loading")
      return <ActivityIndicator size="large" color={COLORS.primary} />;
    if (status === "error") return <ErrorMessage error={error} />;
    if (status === "success") {
      return (
        <View style={styles.content}>
          <Movie movieDetails={data!!} />
          <CustomFlatList
            data={tabs}
            renderRow={(item) => (
              <MovieTabBarClickableButton
                activeTab={activeTab}
                selectedTab={item}
                onPress={() => setActiveTab(item)}
              />
            )}
            keyExtractor={(item) => item}
            horizontal
            contentContainerStyle={styles.tabListContent}
          />
          {renderTabContent()}
        </View>
      );
    }
    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {renderContent()}
      </ScrollView>
      <MovieFooter movieDetails={data} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  content: {
    padding: SIZES.medium,
    paddingBottom: 100,
  },
  tabListContent: {
    columnGap: SIZES.large,
  },
});
