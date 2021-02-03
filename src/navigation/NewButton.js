import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import colors from "../config/colors";

function NewButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={[colors.gradientColor1, colors.gradientColor2]}
        start={{ x: 1, y: 0.1 }}
        end={{ x: 0.1, y: 1 }}
        style={styles.container}
      >
        <EvilIcons name="plus" color={colors.white} size={60} />
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 40,
    bottom: 30,
    height: 70,
    justifyContent: "center",
    width: 70,
  },
});

export default NewButton;
