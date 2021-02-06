import React, { useEffect } from "react";
import Constants from "expo-constants";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import colors from "../config/colors";
import PeopleDetail from "./PeopleDetail";
import PeopleItem from "./PeopleItem";
import { loadInitialContacts } from "../actions";

function PeopleList({ people, detailView, loadInitialContacts }) {
  useEffect(() => {
    loadInitialContacts();
  }, [people]);

  const renderInitialView = () => {
    if (detailView == true) {
      return <PeopleDetail />;
    } else {
      return (
        <FlatList
          data={people}
          renderItem={({ item }) => <PeopleItem people={item} />}
          keyExtractor={(item) => {
            return item._id;
          }}
        />
      );
    }
  };

  return <View style={styles.container}>{renderInitialView()}</View>;
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
});

const mapStateToProps = (state) => {
  return { people: state.people, detailView: state.detailView };
};

export default connect(mapStateToProps, { loadInitialContacts })(PeopleList);
