import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import colors from "../config/colors";
import PeopleItem from "./PeopleItem";

function PeopleList({ people }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={people}
        renderItem={({ item }) => <PeopleItem people={item} />}
        keyExtractor={(item) => {
          return item.id.toString();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
});

const mapStateToProps = (state) => {
  return { people: state.people };
};

export default connect(mapStateToProps)(PeopleList);
