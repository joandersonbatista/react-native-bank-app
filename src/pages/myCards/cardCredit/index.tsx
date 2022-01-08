import React from "react";
import { StyleSheet, View, Text } from "react-native";

import LinearGradient from "react-native-linear-gradient";
import { hp, wp } from "../../../../resnponsive";

import VisaLogo from "../../../../assets/visaLogo.svg";
import ChipLogo from "../../../../assets/chip.svg";

export default function CardCredit() {
  return (
    <LinearGradient
      style={styles.cardContainer}
      colors={["rgba(252, 255, 223, 1)", "rgba(241, 254, 135, 1)"]}>
      <View style={styles.visaLogoContainer}>
        <VisaLogo height={hp(47)} width={hp(47)} />
        <Text style={styles.visaLogoValueText}>$ 5,566.55</Text>
      </View>
      <View>
        <View style={styles.chipContainer}>
          <ChipLogo />
          <Text style={styles.validTextOrExpire}>VALID THRU</Text>
        </View>
        <View style={styles.visaLogoContainer}>
          <Text style={styles.numberCard}>•••• •••• •••• 4552</Text>
          <Text style={styles.validTextOrExpire}>12/22</Text>
        </View>
      </View>
      <Text style={styles.validTextOrExpire}>Margo Lepski</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    height: hp(184),
    width: wp(311),
    marginTop: hp(112),
    borderRadius: hp(20),
    paddingLeft: wp(30),
    paddingRight: wp(30),
    paddingTop: hp(20),
    paddingBottom: hp(20),
    justifyContent: "space-between",
  },
  visaLogoContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  visaLogoValueText: {
    fontSize: hp(21),
    letterSpacing: 0.8,
    lineHeight: hp(23),
    color: "#272A32",
    fontWeight: "700",
  },
  chipContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  validTextOrExpire: {
    fontSize: hp(11),
    letterSpacing: 0.3,
    lineHeight: hp(14),
    color: "#272A32",
    opacity: 0.4,
  },
  numberCard: {
    fontSize: hp(16),
    letterSpacing: 0.3,
    lineHeight: hp(22),
    color: "#272A32",
  },
});
