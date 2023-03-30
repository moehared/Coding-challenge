import { RouteProp } from "@react-navigation/native";
import {
  NavigatorScreenParams,
  ParamListBase,
  CompositeNavigationProp,
} from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import { NavigatePropParameters } from "./NavUtils";
import { SearchParamsList } from "./search/routes";

export type AppRoutesParamList = {
  Home: undefined;
  Details: { movieId: number };
  search: NavigatorScreenParams<SearchParamsList>;
};

export type AppRoutesNavigationProp = StackNavigationProp<AppRoutesParamList>;

export type AppRoutesNavigationPropV2 = WithAppRoutes<
  StackNavigationProp<AppRoutesParamList>
>;

export type AppRoutesRouteProp<RouteName extends keyof AppRoutesParamList> =
  RouteProp<AppRoutesParamList, RouteName>;

export type AppRoutesNavigateParams =
  NavigatePropParameters<AppRoutesNavigationProp>;

/**
 * Helper type to compose a navigation stack's StackNavigationProp with the App's modals
 */
export type WithAppRoutes<
  T extends StackNavigationProp<ParamListBase, string>
> = CompositeNavigationProp<T, StackNavigationProp<AppRoutesParamList>>;
