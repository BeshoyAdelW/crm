import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import PeopleItem from "./PeopleItem";

function PeopleList({ people }) {
  console.log("list is ", people);
  return (
    <View style={styles.container}>
      <FlatList
        data={people}
        renderItem={({ item }) => <PeopleItem people={item} />}
        key={(item) => item.index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const mapStateToProps = (state) => {
  return { people: state.people };
};

export default connect(mapStateToProps)(PeopleList);
