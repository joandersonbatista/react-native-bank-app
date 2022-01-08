/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";

import {
  TouchableOpacity,
  View,
  StyleSheet,
  StatusBar,
  Text,
} from "react-native";

import Arrow from "../../../../assets/arrow-left.svg";
import { hp, wp } from "../../../../resnponsive";
import { RootStackParamList } from "../../home/routes";

type ScreenProps = NavigationProp<RootStackParamList, "MyCards">;

export default function Header() {
  const navigation = useNavigation<ScreenProps>();

  function HandleNavgationBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => {
          HandleNavgationBack();
        }}>
        <Arrow />
      </TouchableOpacity>
      <Text style={styles.text}>Your Cards</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    top: StatusBar.currentHeight! + hp(17),
    flexDirection: "row",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  text: {
    fontSize: hp(17),
    color: "white",
  },
  iconContainer: {
    height: hp(32),
    width: hp(32),
    borderRadius: hp(16),
    position: "absolute",
    left: wp(16),
    backgroundColor: "#453F48",
    justifyContent: "center",
    alignItems: "center",
  },
});
