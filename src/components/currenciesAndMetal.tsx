/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { SvgProps } from "react-native-svg";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { hp, wp } from "../../resnponsive";

import DolarIcon from "../../assets/dolarIcon.svg";
import EuroIcon from "../../assets/euroIcon.svg";
import MetalIcon from "../../assets/metalIcon.svg";

interface ItemCurrencieProps {
  coin: "USD" | "EUR" | "GOLD" | "SILVER";
  Icon: React.FC<SvgProps>; // type png
}

function ItemCurrencie({ coin, Icon }: ItemCurrencieProps) {
  return (
    <TouchableOpacity style={styles.itemCurrencieContainer}>
      <View style={styles.containerCurrencieAndBuy}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.iconContainer}>
            <Icon />
          </View>
          <Text style={styles.textCoin}>{coin}</Text>
        </View>
        <Text style={styles.textCoin}>$ 78,92</Text>
      </View>
      <View style={styles.containerSell}>
        <Text style={styles.textCoin}>$ 78,92</Text>
      </View>
    </TouchableOpacity>
  );
}

interface ICurrenciesAndMetalProps {
  title: "Currencie" | "Metals";
  typeCurrencies: "Currencie" | "Metals";
}

export default function CurrenciesAndMetal({
  title,
  typeCurrencies,
}: ICurrenciesAndMetalProps) {
  return (
    <View style={styles.currenciesContainer}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.containerCurrencieAndBuy}>
          <Text style={styles.currenciesTitle}>{title}</Text>
          <Text style={styles.currenciesTitle}>Buy</Text>
        </View>

        <View style={styles.textSellContainer}>
          <Text style={styles.currenciesTitle}>Sell</Text>
        </View>
      </View>
      {typeCurrencies === "Currencie" ? (
        <>
          <ItemCurrencie coin="USD" Icon={DolarIcon} />
          <ItemCurrencie coin="EUR" Icon={EuroIcon} />
        </>
      ) : (
        <>
          <ItemCurrencie coin="GOLD" Icon={MetalIcon} />
          <ItemCurrencie coin="SILVER" Icon={MetalIcon} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: "#B2D0CE",
    height: hp(32),
    width: hp(32),
    borderRadius: hp(12),
    marginRight: wp(12),
    alignItems: "center",
    justifyContent: "center",
  },
  currenciesContainer: {
    backgroundColor: "#212121",
    opacity: 0.7,
    padding: wp(20),
    width: wp(335),
    marginTop: hp(12),
    borderRadius: hp(26),
  },
  currenciesTitle: {
    fontSize: hp(14),
    lineHeight: hp(16),
    color: "#79767D",
    marginBottom: hp(4),
  },
  textCoin: {
    fontSize: hp(17),
    color: "white",
    lineHeight: hp(19),
  },
  itemCurrencieContainer: {
    flexDirection: "row",
    marginTop: hp(8),
  },
  containerCurrencieAndBuy: {
    flexDirection: "row",
    flex: 2.5,
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerSell: {
    flexDirection: "row",
    justifyContent: "flex-end",
    flex: 1,
    alignItems: "center",
  },
  textSellContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    flex: 1,
  },
});
