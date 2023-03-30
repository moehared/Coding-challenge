import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { WithAppRoutes } from "../AppRoute";
interface SearchParams {}

export type SearchParamsList = {
  movieId: SearchParams;
};

export type SearchScreenNavigationProp = WithAppRoutes<
  StackNavigationProp<SearchParamsList>
>;
export type SearchScreenRouteProp<RouteName extends keyof SearchParamsList> =
  RouteProp<SearchParamsList, RouteName>;
