import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Constants from "expo-constants";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./src/reducers/PeopleReducer";
import TabNavigator from "./src/navigation/TabNavigator";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default function App() {
  return (
    <Provider store={store}>
      <TabNavigator />
    </Provider>
  );
}
