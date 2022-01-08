/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";

import LinearGradient from "react-native-linear-gradient";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes/stackNavigation";
import { hp, wp } from "../../../resnponsive";

import ellipse5 from "../../../assets/Ellipse5.png";
import ellipse from "../../../assets/Ellipse.png";
import MoreIcon from "../../../assets/more-vertical.svg";
import LogoIcon from "../../../assets/logo.svg";

export default function Login({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Login">) {
  function HandleNavigate() {
    return navigation.navigate("BottomHome");
  }
  return (
    <>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <View style={styles.background}>
        <Image source={ellipse5} style={styles.blurImage} />
        <Image source={ellipse} style={styles.blurImage2} />
        {/* header */}
        <View style={styles.headerContainer}>
          <LogoIcon />
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => HandleNavigate()}>
            <MoreIcon />
          </TouchableOpacity>
        </View>
        {/* ********** */}

        {/* login button */}
        <TouchableOpacity onPress={() => HandleNavigate()}>
          <LinearGradient
            style={styles.buttonLogin}
            colors={["rgba(252, 255, 223, 1)", "rgba(241, 254, 135, 1)"]}>
            <Text style={styles.textLogin}>Log in</Text>
          </LinearGradient>
        </TouchableOpacity>
        {/* ********* */}

        {/* Become a client */}
        <TouchableOpacity
          style={styles.buttonBecomeClient}
          onPress={() => HandleNavigate()}>
          <Text style={[styles.textLogin, { color: "white" }]}>
            Become a client of the bank
          </Text>
        </TouchableOpacity>
        {/* ********* */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#1E2121",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLogin: {
    width: wp(327),
    paddingTop: hp(13),
    paddingBottom: hp(13),
    height: hp(52),
    borderRadius: hp(32),
  },
  buttonBecomeClient: {
    width: wp(327),
    paddingTop: hp(13),
    paddingBottom: hp(13),
    height: hp(52),
    borderRadius: hp(32),
    backgroundColor: "#373139",
    marginTop: hp(16),
  },
  textLogin: {
    fontSize: hp(17),
    lineHeight: hp(22),
    color: "black",
    textAlign: "center",
  },
  blurImage: {
    position: "absolute",
    top: hp(-50),
    right: 0,
  },
  blurImage2: {
    position: "absolute",
    right: wp(0),
    top: -30,
  },
  headerContainer: {
    top: StatusBar.currentHeight! + hp(12),
    flexDirection: "row",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  iconContainer: {
    height: hp(32),
    width: hp(32),
    borderRadius: hp(16),
    position: "absolute",
    right: wp(15),
    backgroundColor: "#453F48",
    justifyContent: "center",
    alignItems: "center",
  },
});
