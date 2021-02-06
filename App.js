import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Constants from "expo-constants";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reducers from "./src/reducers/PeopleReducer";
import TabNavigator from "./src/navigation/TabNavigator";
import thunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <TabNavigator />
    </Provider>
  );
}
