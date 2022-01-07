/* eslint-disable react-native/no-inline-styles */

import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SvgProps } from "react-native-svg";
import { hp, wp } from "../../resnponsive";

interface IProps {
  title: string;
  backgroundColor: string;
  first?: boolean;
  last?: boolean;
  Icon: React.FC<SvgProps>; // type .png
}

export default function CardFinances({
  Icon,
  title,
  backgroundColor,
  first,
  last,
}: IProps) {
  return (
    <TouchableOpacity
      style={[
        { marginLeft: first ? wp(16) : 0, marginRight: last ? wp(16) : 0 },
        styles.container,
      ]}>
      <View style={[{ backgroundColor }, styles.iconContainer]}>
        <Icon />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: hp(110),
    width: wp(100),
    backgroundColor: "rgba(37, 38, 38, 1)",
    borderRadius: hp(26),
    marginRight: wp(14),
    paddingTop: hp(16),
    paddingBottom: wp(16),
    paddingLeft: wp(16),
    justifyContent: "space-between",
  },
  iconContainer: {
    height: hp(32),
    width: wp(32),
    borderRadius: hp(10),
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: hp(13),
    color: "white",
    lineHeight: hp(12),
    letterSpacing: 0.7,
    marginTop: hp(25),
  },
});
