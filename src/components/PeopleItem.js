import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";
import { getTheme } from "react-native-material-kit";
import { EvilIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function PeopleItem({ people }) {
  const theme = getTheme();
  return (
    <View style={[theme.cardStyle, styles.card]}>
      <Image
        source={require("../../assets/background.jpg")}
        style={[theme.cardImageStyle, styles.image]}
      />
      <EvilIcons name="user" size={100} style={styles.icon} />
      <Text style={[theme.cardTitleStyle, styles.title]}>
        {people.firstName} {people.lastName}
      </Text>
      <Text style={[theme.cardActionStyle, styles.action]}>
        {people.company}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
  },
  title: {
    top: 20,
    left: 80,
    fontSize: 24,
  },
  image: {
    height: 100,
  },
  action: {
    backgroundColor: colors.black,
    color: colors.white,
  },
  icon: {
    position: "absolute",
    top: 15,
    left: 0,
    color: "white",
    backgroundColor: "transparent",
  },
});

export default connect(null, actions)(PeopleItem);
