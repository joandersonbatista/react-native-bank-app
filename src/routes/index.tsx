import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./stackNavigation";

export default function Routes() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
