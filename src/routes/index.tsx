import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./bottomTab";

export default function Routes() {
  return (
    <>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="#1E1F1F"
      />
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </>
  );
}
