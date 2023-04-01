import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { COLORS } from "../constants";
import { AppRoutesParamList } from "./AppRoute";
import SearchScreen from "../screen/search/SearchScreen";
import { DetailsScreen } from "../screen/detail/DetailsScreen";
import { HomeScreen } from "../screen/home";

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
      component={HomeScreen}
    />
    <Stack.Screen
      name="Details"
      component={DetailsScreen}
      options={{
        headerShown: true,
      }}
    />
    <Stack.Screen
      name="search"
      component={SearchScreen}
      options={{
        headerShown: true,
        title: "",
      }}
    />
  </Stack.Navigator>
);
