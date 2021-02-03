import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import { EvilIcons } from "@expo/vector-icons";
import * as actions from "../actions";

function AddPerson() {
  return (
    <View>
      <Text>Add Person Screen</Text>
    </View>
  );
}

export default connect(null, actions)(AddPerson);
