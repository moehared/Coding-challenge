import React from "react";
import { StatusBar } from "react-native";
import Homeview from "./Homeview";

export const HomeScreenContainer = ({}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Homeview />
    </>
  );
};
