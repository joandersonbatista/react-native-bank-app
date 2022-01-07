/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { hp, wp } from "../../resnponsive";

import CardCreditIcon from "../../assets/cardCreditIcon.svg";
import ArrowIcon from "../../assets/arrow.svg";
import PlusIcon from "../../assets/plus.svg";

export default function CurrentLoans() {
  return (
    <>
      <View style={styles.loanHeader}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}>
          <ArrowIcon />
          <Text style={styles.currentLoans}>CURRENT LOANS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonLoan}>
          <PlusIcon />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.itemCurrentLoan}>
        <View style={styles.iconContainer}>
          <CardCreditIcon stroke="black" />
        </View>
        <View>
          <Text style={styles.accountNumber}>Accoount Nº 38745825</Text>
          <Text style={styles.accountExpires}>Expires 12/22/2023</Text>
        </View>
        <View style={styles.value}>
          <Text style={styles.accountNumber}>$ 78,92</Text>
          <Text style={styles.accountExpires}>Rate 3.5%</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  loanHeader: {
    width: wp(335),
    marginTop: hp(31),
    flexDirection: "row",
    alignItems: "center",
  },
  currentLoans: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: hp(13),
    lineHeight: hp(14),
    letterSpacing: 0.3,
    marginLeft: wp(8),
  },
  buttonLoan: {
    backgroundColor: "#3D3B3E",
    height: hp(20),
    width: hp(20),
    borderRadius: hp(20),
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 0,
  },
  itemCurrentLoan: {
    width: wp(335),
    backgroundColor: "#212121",
    paddingTop: hp(22),
    paddingBottom: hp(22),
    paddingLeft: wp(20),
    paddingRight: wp(20),
    opacity: 0.7,
    marginTop: hp(12),
    borderRadius: hp(26),
    alignItems: "center",
    flexDirection: "row",
  },
  iconContainer: {
    backgroundColor: "#B2D0CE",
    height: hp(32),
    width: hp(32),
    borderRadius: hp(12),
    marginRight: wp(12),
    alignItems: "center",
    justifyContent: "center",
  },
  accountNumber: {
    color: "white",
    fontSize: hp(17),
    lineHeight: hp(18),
  },
  accountExpires: {
    color: "#79767D",
    fontSize: hp(14),
    lineHeight: hp(16),
  },
  value: {
    position: "absolute",
    right: wp(20),
    alignItems: "flex-end",
  },
});
