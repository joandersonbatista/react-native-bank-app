import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { hp, wp } from "../../../resnponsive";

// components
import CardCredit from "./cardCredit";
import CardFinances from "./cardFinances";
import Header from "../../components/header";
import CurrentLoans from "./currentLoans";
import Span from "../../components/span";
import CurrenciesAndMetal from "./currenciesAndMetal";

// assets
import StarIcon from "../../../assets/starIcon.svg";
import BudgetIcon from "../../../assets/budgetIcon.svg";
import FinanceIcon from "../../../assets/financeIcon.svg";
import SearchIcon from "../../../assets/searchIcon.svg";
import Ellipse from "../../../assets/Ellipse.png";
import Ellipse2 from "../../../assets/Ellipse2.png";
import Ellipse3 from "../../../assets/Ellipse3.png";
import Ellipse4 from "../../../assets/Ellipse4.png";

export default function Home() {
  return (
    <ScrollView style={styles.background} showsVerticalScrollIndicator={false}>
      <Header />
      <Image source={Ellipse} style={{ position: "absolute", right: wp(0) }} />
      <Image source={Ellipse2} style={{ position: "absolute", left: wp(70) }} />
      <View style={styles.balanceContainer}>
        <Text style={styles.textBalance}>Your balance</Text>
        <Text style={styles.textMoney}>$ 7,896</Text>
        <TouchableOpacity style={styles.searchContainer}>
          <SearchIcon />
        </TouchableOpacity>
      </View>
      <View>
        <ScrollView
          style={{ marginTop: hp(20) }}
          horizontal
          showsHorizontalScrollIndicator={false}>
          <CardCredit backgrounColor="blue" first value={2.235} />
          <CardCredit backgrounColor="yellow" value={6.597} />
          <CardCredit backgrounColor="violet" last value={4.258} />
        </ScrollView>
      </View>
      <Text style={styles.textFinance}>FINANCE</Text>
      <View>
        <ScrollView
          style={{ marginTop: hp(12) }}
          horizontal
          showsHorizontalScrollIndicator={false}>
          <CardFinances
            title="My bounces"
            Icon={StarIcon}
            backgroundColor="rgba(242, 254, 141, 1)"
            first
          />
          <CardFinances
            title="My budget"
            Icon={BudgetIcon}
            backgroundColor="rgba(178, 208, 206, 1)"
          />
          <CardFinances
            title="Finace analysis"
            Icon={FinanceIcon}
            backgroundColor="rgba(170, 158, 183, 1)"
          />
          <CardFinances
            title="My bounces"
            Icon={StarIcon}
            backgroundColor="rgba(242, 254, 141, 1)"
            last
          />
        </ScrollView>
      </View>
      <View style={styles.actionSheetContainer}>
        <Image
          source={Ellipse3}
          style={{ position: "absolute", right: wp(0) }}
        />
        <Image
          source={Ellipse4}
          style={{ position: "absolute", left: wp(0), bottom: 0 }}
        />

        <CurrentLoans />
        <Span />
        <CurrenciesAndMetal />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#1E1F1F",
    flex: 1,
  },
  balanceContainer: {
    width: "100%",
    paddingLeft: wp(20),
    paddingRight: wp(20),
    height: hp(50),
    marginTop: hp(24),
    justifyContent: "center",
  },
  textBalance: {
    color: "white",
    fontSize: hp(17),
  },
  textMoney: {
    color: "white",
    fontWeight: "700",
    fontSize: hp(27),
  },
  searchContainer: {
    height: hp(32),
    width: hp(32),
    backgroundColor: "#3E3E3E",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: wp(24),
    bottom: hp(1),
    borderRadius: hp(16),
  },
  scrollContainer: {
    marginTop: hp(20),
  },
  textFinance: {
    color: "white",
    marginTop: hp(39),
    marginLeft: wp(20),
  },
  actionSheetContainer: {
    backgroundColor: "#252626",
    flex: 1,
    marginTop: hp(32),
    borderTopLeftRadius: hp(30),
    borderTopRightRadius: hp(30),
    alignItems: "center",
    paddingBottom: hp(100),
    overflow: "hidden",
  },
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
  circle: {
    height: hp(50),
    width: wp(50),
    backgroundColor: "white",
    position: "absolute",
  },
  blurContainer: {
    position: "absolute",
    width: "100%",
    height: 50,
    bottom: 0,
  },
});
