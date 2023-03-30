import type { NavigationProp } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";

/**
 * Helper type to extract the the parameters that could be passed to `navigate` when typed with the
 * provided StackNavigationProp. Generally useful in order to add type completion and type safety
 * when testing navigation.
 */
export type NavigatePropParameters<T extends StackNavigationProp<any>> =
  T extends StackNavigationProp<infer PL>
    ? {
        [K in keyof PL]: undefined extends PL[K]
          ? [K] | [K, PL[K]]
          : [K, PL[K]];
      }[keyof PL]
    : never;

/**
 * Used in order to type an object that holds screens (for example, Modals)
 */
export type RoutesObject<T extends Record<string, any>> = Record<
  keyof T,
  React.ComponentType<any>
>;

type NavigationParams = object | undefined;

export type NavigationDetails<T extends NavigationParams = NavigationParams> =
  readonly [string, T];

export type Navigate<T extends {} = ReactNavigation.RootParamList> =
  NavigationProp<T>["navigate"];
