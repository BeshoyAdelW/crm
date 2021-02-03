import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EvilIcons from "@expo/vector-icons/Ionicons";
import PeopleList from "../components/PeopleList";
import AddPerson from "../components/AddPerson";
import CompanyList from "../components/CompanyList";
import NewButton from "./NewButton";
import colors from "../config/colors";
import routes from "./routes";

const Tab = createBottomTabNavigator();

export default function TabNavigator(props) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === routes.PEOPLELIST) {
              iconName = focused ? "person" : "person";
            } else if (route.name === routes.COMPANYLIST) {
              iconName = focused ? "archive" : "archive";
            }

            return <EvilIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: colors.secondary,
          inactiveTintColor: colors.medium,
        }}
      >
        <Tab.Screen
          name={routes.PEOPLELIST}
          component={PeopleList}
          options={{ title: "" }}
        />
        <Tab.Screen
          name={routes.ADDPERSON}
          component={AddPerson}
          options={({ navigation }) => ({
            tabBarButton: () => (
              <NewButton
                onPress={() => navigation.navigate(routes.ADDPERSON)}
              />
            ),
          })}
        />
        <Tab.Screen
          name={routes.COMPANYLIST}
          component={CompanyList}
          options={{ title: "" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
