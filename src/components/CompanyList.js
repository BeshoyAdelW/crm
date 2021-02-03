import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import { EvilIcons } from "@expo/vector-icons";
import * as actions from "../actions";

function CompanyList() {
  return (
    <View>
      <Text>Company Screen</Text>
    </View>
  );
}

export default connect(null, actions)(CompanyList);
