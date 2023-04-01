import { StyleProp, ViewStyle, FlatList } from "react-native";
import React, { ReactElement } from "react";

interface CustomFlatListProps<T> {
  data: T[];
  renderRow: (t: T, index: number, showBorder: boolean) => ReactElement;
  keyExtractor: (item: T) => string | number;
  horizontal?: boolean;
  contentContainerStyle?: StyleProp<ViewStyle>;
  numColumns?: number;
  columnWrapperStyle?: StyleProp<ViewStyle>;
}

export const CustomFlatList = <T,>({
  data,
  renderRow,
  horizontal = false,
  contentContainerStyle,
  numColumns = 1,
  columnWrapperStyle,
}: CustomFlatListProps<T>) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => String(item)}
      horizontal={horizontal}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={contentContainerStyle}
      renderItem={({ item, index }) =>
        renderRow(item, index, index < data.length - 1)
      }
      numColumns={numColumns}
      columnWrapperStyle={columnWrapperStyle}
    />
  );
};
