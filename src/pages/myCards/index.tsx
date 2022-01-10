import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View, Image, StatusBar } from "react-native";

import ellipse from "../../../assets/Ellipse.png";

import { wp } from "../../../resnponsive";
import { RootStackParamList } from "../home/routes";
import CardCredit from "./cardCredit";
import Header from "./header";
import Transactions from "./transactions";

type Props = NativeStackScreenProps<RootStackParamList, "MyCards">;

export default function MyCards({ route }: Props) {
  return (
    <>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <View style={styles.background}>
        <Image source={ellipse} style={styles.blurBackground} />
        <Header />
        <CardCredit initialCard={route.params.id} />
        <Transactions />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#1F2020",
    alignItems: "center",
  },
  blurBackground: {
    position: "absolute",
    right: wp(-20),
    top: -30,
  },
});
