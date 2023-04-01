import { RouteProp } from "@react-navigation/native";
import {
  NavigatorScreenParams,
  ParamListBase,
  CompositeNavigationProp,
} from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import { NavigatePropParameters } from "./NavUtils";

export type AppRoutesParamList = {
  Home: undefined;
  Details: { imdbID: String };
  search: { searchTerm: string };
};

export type AppRoutesNavigationProp = WithAppRoutes<
  StackNavigationProp<AppRoutesParamList>
>;

export type AppRoutesRouteProp<RouteName extends keyof AppRoutesParamList> =
  RouteProp<AppRoutesParamList, RouteName>;

export type AppRoutesNavigateParams =
  NavigatePropParameters<AppRoutesNavigationProp>;

/**
 * Helper type to compose a navigation stack's StackNavigationProp with the app's routes.
 */
export type WithAppRoutes<
  T extends StackNavigationProp<ParamListBase, string>
> = CompositeNavigationProp<T, StackNavigationProp<AppRoutesParamList>>;
