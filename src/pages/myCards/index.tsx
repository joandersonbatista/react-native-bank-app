import React from "react";
import { StyleSheet, View, Image } from "react-native";

import ellipse from "../../../assets/Ellipse.png";

import { wp } from "../../../resnponsive";
import CardCredit from "./cardCredit";
import Header from "./header";
import Transactions from "./transactions";

export default function MyCards() {
  return (
    <View style={styles.background}>
      <Image source={ellipse} style={styles.blurBackground} />
      <Header />
      <CardCredit />
      <Transactions />
    </View>
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
