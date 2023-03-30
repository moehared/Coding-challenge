import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { HomeStack } from "./HomeStack";
import { FavouriteScreenContainer } from "../screen/favourite";
import { COLORS } from "../constants";
import { SettingScreen } from "../screen/setting/SettingScreen";

type TabRoutes = {
  Home: undefined;
  Favorite: undefined;
  Setting: undefined;
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

  switch (route.name) {
    case "Home":
      iconName = focused ? "home" : "home-outline";
      break;
    case "Favorite":
      iconName = focused ? "heart" : "heart-outline";
      break;
    case "Setting":
      iconName = focused ? "settings" : "settings-outline";
      break;
    default:
      iconName = focused ? "home" : "home-outline";
      break;
  }

  return <Icon name={iconName} size={size} color={color} />;
};

const screenOptions = ({
  route,
}: {
  route: TabRouteProp<keyof TabRoutes>;
}) => ({
  headerShadowVisible: false,
  headerShown: false,
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
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default AppTabs;
