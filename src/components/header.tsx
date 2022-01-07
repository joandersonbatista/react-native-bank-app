/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import { View, StyleSheet, Image, StatusBar } from "react-native";
import { hp, wp } from "../../resnponsive";

import LogoIcon from "../../assets/logo.svg";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageContainer}
        source={require("../../assets/avatar.png")}
      />
      <LogoIcon />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: StatusBar.currentHeight! + hp(10),
    paddingTop: hp(8),
    paddingBottom: hp(8),
    paddingLeft: wp(16),
    paddingRight: wp(16),
  },
  imageContainer: {
    position: "absolute",
    left: wp(16),
  },
});
