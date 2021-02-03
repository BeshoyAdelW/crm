import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";

function PeopleItem({ people }) {
  console.log("item is", people);
  return (
    <View style={styles.card}>
      <Text>
        {people.firstName} {people.lastName}
      </Text>
      <Text>{people.phone}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "80%",
    margin: 4,
    borderWidth: 1,
    padding: 12,
    borderRadius: 6,
  },
});

const mapStateToProps = (state) => {
  return { people: state.people };
};

export default connect(null, actions)(PeopleItem);
