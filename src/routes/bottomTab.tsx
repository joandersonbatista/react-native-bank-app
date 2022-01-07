/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import { StyleSheet, TouchableOpacity, View } from "react-native";
import Home from "../pages/home";
import { hp, wp } from "../../resnponsive";

import HomeSvg from "../../assets/Home.svg";
import ShopeSvg from "../../assets/Shope.svg";
import CardSvg from "../../assets/Card.svg";
import ChatSvg from "../../assets/Chat.svg";
import HistorySvg from "../../assets/History.svg";

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="home"
      tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Shope"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Card"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Chat"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="History"
        component={Home}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

function TabBar({ descriptors, navigation, state }: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate(route.name, { name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <BottomMenuItem
              isCurrent={isFocused}
              title={
                index === 0
                  ? "Home"
                  : index === 1
                  ? "Shop"
                  : index === 2
                  ? "Card"
                  : index === 3
                  ? "Chat"
                  : "History"
              }
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

interface IBottomMenuItem {
  title: string;
  isCurrent: boolean;
}

function BottomMenuItem({ isCurrent, title }: IBottomMenuItem) {
  return (
    <>
      {title === "Home" && (
        <HomeSvg
          height={24}
          width={24}
          stroke={isCurrent ? "#EDFC74" : "white"}
        />
      )}
      {title === "Shop" && (
        <ShopeSvg
          height={24}
          width={24}
          stroke={isCurrent ? "#EDFC74" : "white"}
        />
      )}
      {title === "Card" && (
        <CardSvg
          height={24}
          width={24}
          stroke={isCurrent ? "#EDFC74" : "white"}
        />
      )}
      {title === "Chat" && (
        <ChatSvg
          height={24}
          width={24}
          stroke={isCurrent ? "#EDFC74" : "white"}
        />
      )}
      {title === "History" && (
        <HistorySvg
          height={24}
          width={24}
          stroke={isCurrent ? "#EDFC74" : "white"}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E1E1E",
    flexDirection: "row",
    height: hp(82),
    borderTopLeftRadius: hp(20),
    borderTopRightRadius: hp(20),
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingTop: hp(23),
    paddingBottom: hp(35),
    paddingLeft: wp(32),
    paddingRight: wp(32),
    alignItems: "center",
    justifyContent: "space-between",
  },
});
