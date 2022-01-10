import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { hp, wp } from "../../../../resnponsive";

import Arrow from "../../../../assets/arrow-left.svg";
import circle from "../../../../assets/Circle.png";
import ItemTransaction from "../itemTransaction";

export default function Transactions() {
  return (
    <View style={styles.transcitionsBackground}>
      <Image source={circle} style={styles.blurBackground} />
      <View style={styles.transactionContainer}>
        <Text style={styles.textTransaction}>Transactions</Text>
        <TouchableOpacity style={styles.filterContainer}>
          <Text style={styles.textFilter}>Filter</Text>
          <Arrow
            height={hp(12)}
            width={wp(6)}
            style={{ transform: [{ rotate: "-90deg" }] }}
          />
        </TouchableOpacity>
      </View>
      <TransactionsItem day="today" />
      <TransactionsItem day="June 13th" />
    </View>
  );
}

interface ITransactionsItem {
  day: string;
}

function TransactionsItem({ day }: ITransactionsItem) {
  return (
    <View style={styles.itemTransactionContainer}>
      <Text style={styles.textDay}>{day}</Text>
      <ItemTransaction
        title="Transfer"
        value="+ $3,110"
        shop="Incoming transfer"
        type="+"
      />
      <ItemTransaction
        title="Health"
        value="- $319,9"
        shop="Pharmacy"
        type="-"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  transcitionsBackground: {
    backgroundColor: "#252626",
    flex: 1,
    marginTop: hp(31),
    borderTopLeftRadius: hp(30),
    borderTopRightRadius: hp(30),
    alignItems: "center",
    width: "100%",
    paddingBottom: hp(100),
    overflow: "hidden",
  },
  blurBackground: {
    position: "absolute",
    right: wp(20),
    top: 50,
  },
  textTransaction: {
    fontSize: hp(21),
    color: "white",
  },
  filterContainer: {
    paddingLeft: wp(12),
    paddingRight: wp(12),
    paddingTop: hp(9),
    paddingBottom: hp(9),
    backgroundColor: "#1E1F1F",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: hp(20),
  },
  textFilter: {
    fontSize: hp(15),
    lineHeight: hp(19),
    color: "white",
    paddingRight: wp(7),
  },
  transactionContainer: {
    flexDirection: "row",
    width: "100%",
    paddingLeft: wp(24),
    paddingRight: wp(24),
    marginTop: hp(32),
    justifyContent: "space-between",
  },
  itemTransactionContainer: {
    width: "100%",
    paddingLeft: wp(24),
    paddingRight: wp(24),
    marginBottom: hp(32),
  },
  textDay: {
    fontSize: hp(15),
    lineHeight: hp(19),
    letterSpacing: 0.8,
    color: "white",
  },
});
