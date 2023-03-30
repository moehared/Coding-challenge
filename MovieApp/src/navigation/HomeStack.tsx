import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { COLORS } from "../constants";
import { AppRoutesParamList } from "./AppRoute";
import { HomeScreenContainer } from "../screen/home";
import DetailsScreen from "../screen/detail/DetailsScreen";
import SearchScreen from "../screen/search/SearchScreen";

const Stack = createStackNavigator<AppRoutesParamList>();

export const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShadowVisible: false,
      headerShown: false,
      headerStyle: {
        backgroundColor: COLORS.white,
      },
    }}
  >
    <Stack.Screen
      options={{
        title: "Home",
      }}
      name="Home"
      component={HomeScreenContainer}
    />
    <Stack.Screen name="Details" component={DetailsScreen} />
    <Stack.Screen name="search" component={SearchScreen} />
  </Stack.Navigator>
);
