import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MyCards from "../myCards";
import Home from ".";

export type RootStackParamList = {
  MyCards: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyCards"
        component={MyCards}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
