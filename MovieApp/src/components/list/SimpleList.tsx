import React, { ReactNode } from "react";
import Divider from "../Divider";
import { Card } from "./card/Card";

const SimpleListCard = ({
  cardWrapper = true,
  children,
  horizontalInset = true,
  verticalInset = false,
  verticalMargin = false,
}: {
  cardWrapper: boolean;
  children: ReactNode;
  horizontalInset?: boolean;
  verticalInset?: boolean;
  verticalMargin?: boolean;
}) =>
  cardWrapper ? (
    <Card
      horizontalInset={horizontalInset}
      verticalInset={verticalInset}
      verticalMargin={verticalMargin}
    >
      {children}
    </Card>
  ) : (
    <>{children}</>
  );

interface SimpleListProps<T> {
  data: T[];
  renderRow: (t: T, index: number, showBorder: boolean) => ReactNode;
  keyExtractor: (t: T, index: number) => string | number;
  showDividers?: boolean;
  dividerStyle?: object;
  cardWrapper?: boolean;
  horizontalInset?: boolean;
}

export const SimpleList = <T,>({
  data,
  renderRow,
  showDividers = true,
  keyExtractor,
  dividerStyle,
  cardWrapper = true,
  horizontalInset = true,
}: SimpleListProps<T>) => {
  return data.length ? (
    <SimpleListCard horizontalInset={horizontalInset} cardWrapper={cardWrapper}>
      {data.map((item: T, index: number) => {
        return (
          <React.Fragment key={keyExtractor(item, index)}>
            {renderRow(item, index, index < data.length - 1)}
            {showDividers && index !== data.length - 1 ? (
              <Divider style={dividerStyle} />
            ) : null}
          </React.Fragment>
        );
      })}
    </SimpleListCard>
  ) : null;
};
