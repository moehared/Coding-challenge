import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

import Icon from "react-native-vector-icons/FontAwesome5";
import { COLORS, SIZES } from "../../constants";
import { CustomFlatList } from "../list/CustomFlatList";
import { MovieTabBarClicableButton } from "./MovieTabBarClicableButton";

const movieTypes = ["All", "Action", "Comedy", "Horror", "Romance"];
export const Welcome = () => {
  const [activeMovieTab, setActiveMovieTab] = React.useState(
    movieTypes[0] || ""
  );

  const [searchText, setSearchText] = useState("");

  const handleSearchInput = (value: string) => {
    setSearchText(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.userName}>Hello Moe</Text>
      <Text style={styles.welcomeMessage}>
        Find your perfect Movie to watch
      </Text>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for Movies"
            placeholderTextColor={COLORS.gray}
            value={searchText}
            onChangeText={handleSearchInput}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Icon name={"search"} size={25} color={COLORS.white} />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <CustomFlatList
          data={movieTypes}
          renderRow={(item, _, _2) => (
            <MovieTabBarClicableButton
              activeMovieTab={activeMovieTab}
              selectedTab={item}
              setActiveMovieTab={setActiveMovieTab}
              onPress={() => {
                setActiveMovieTab(item);
              }}
            />
          )}
          keyExtractor={(item) => item}
          horizontal
          contentContainerStyle={{
            columnGap: SIZES.small,
          }}
        />
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  userName: {
    fontWeight: "bold",
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },
  welcomeMessage: {
    fontWeight: "bold",
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: 2,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
  },
  tab: {
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
  },
  tabText: {},
  listRowDividers: {
    height: SIZES.medium,
    backgroundColor: "transparent",
  },
  activeTab: {
    borderColor: COLORS.secondary,
  },
  activeTabText: {
    color: COLORS.secondary,
  },
});
