import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { hp, wp } from "../../../../resnponsive";

import VisaLogo from "../../../../assets/visaLogo.svg";
import { RootStackParamList } from "../routes";

type ScreenProps = NavigationProp<RootStackParamList, "Home">;

interface IProps {
  backgrounColor: string;
  first?: boolean;
  last?: boolean;
  value: number;
}

export default function CardCredit({
  value,
  backgrounColor,
  first,
  last,
}: IProps) {
  const [background, setBackground] = React.useState([
    "rgba(10, 234, 234, 1)",
    "rgba(178, 208, 50, 1)",
  ]);

  React.useEffect(() => {
    function getBacground(): void {
      if (backgrounColor === "blue") {
        setBackground(["rgba(234, 234, 234, 1)", "rgba(178, 208, 206, 1)"]);
      }
      if (backgrounColor === "yellow") {
        setBackground(["rgba(252, 255, 223, 1)", "rgba(241, 254, 135, 1)"]);
      }
      if (backgrounColor === "violet") {
        setBackground(["rgba(242, 239, 244, 1)", "rgba(184, 169, 198, 1)"]);
      }
    }

    getBacground();
  }, [backgrounColor]);

  const navigate = useNavigation<ScreenProps>();

  function HandleNavgation() {
    navigate.navigate("MyCards");
  }

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={() => HandleNavgation()}>
      <LinearGradient
        colors={background}
        style={[
          { marginLeft: first ? wp(20) : 0, marginRight: last ? wp(20) : 0 },
          styles.container,
        ]}>
        <VisaLogo />
        <View>
          <Text style={styles.salary}>Salary</Text>
          <Text style={styles.money}>$ {value}</Text>
        </View>
        <Text style={styles.cardNumber}>**6917</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: hp(170),
    width: wp(148),
    paddingTop: hp(24),
    paddingBottom: hp(24),
    paddingLeft: wp(16),
    backgroundColor: "blue",
    borderRadius: hp(30),
    justifyContent: "space-between",
    marginRight: wp(13),
  },
  salary: {
    fontSize: hp(14),
    color: "rgba(39, 42, 50, 1)",
    lineHeight: hp(14),
    letterSpacing: 0.8,
  },
  money: {
    fontSize: hp(19),
    color: "rgba(39, 42, 50, 1)",
    lineHeight: hp(24),
    fontWeight: "700",
  },
  cardNumber: {
    fontSize: hp(14),
    color: "rgba(39, 42, 50, 1)",
    lineHeight: hp(14),
    letterSpacing: 0.8,
  },
});
