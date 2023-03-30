import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { HomeStack } from "./HomeStack";
import { FavouriteScreenContainer } from "../screen/favourite";
import { COLORS } from "../constants";

type TabRoutes = {
  Home: undefined;
  Favorite: undefined;
};
export type TabRouteProp<T extends keyof TabRoutes> = RouteProp<TabRoutes, T>;

const Tab = createBottomTabNavigator<TabRoutes>();

const getTabBarIcon = (
  route: TabRouteProp<keyof TabRoutes>,
  focused: boolean,
  color: string,
  size: number
) => {
  let iconName: string = "";

  if (route.name === "Home") {
    iconName = focused ? "home" : "home-outline";
  } else if (route.name === "Favorite") {
    iconName = focused ? "heart" : "heart-outline";
  }

  return <Icon name={iconName} size={size} color={color} />;
};

const screenOptions = ({
  route,
}: {
  route: TabRouteProp<keyof TabRoutes>;
}) => ({
  headerShadowVisible: false,
  backgroundColor: COLORS.white,
  tabBarIcon: ({
    focused,
    color,
    size,
  }: {
    focused: boolean;
    color: string;
    size: number;
  }) => getTabBarIcon(route, focused, color, size),
});

const AppTabs = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Favorite" component={FavouriteScreenContainer} />
    </Tab.Navigator>
  );
};

export default AppTabs;
