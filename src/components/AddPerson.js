import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
} from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";
import { useState } from "react";
import routes from "../navigation/routes";

function AddPerson({ navigation, createNewContact }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [project, setProject] = useState("");
  const [notes, setNotes] = useState("");

  const onAddPress = () => {
    createNewContact({
      firstName,
      lastName,
      phone,
      email,
      company,
      project,
      notes,
    });
    navigation.navigate(routes.PEOPLELIST);
  };

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.form}>
          <Text style={styles.title}>Add a new contact</Text>
          <TextInput
            style={styles.fieldStyle}
            autoCompleteType="name"
            onChangeText={(text) => setFirstName(text)}
            value={firstName}
            placeholder="First Name"
          />
          <TextInput
            style={styles.fieldStyle}
            autoCompleteType="name"
            textContentType="familyName"
            onChangeText={(text) => setLastName(text)}
            value={lastName}
            placeholder="Last Name"
          />
          <TextInput
            style={styles.fieldStyle}
            keyboardType="number-pad"
            textContentType="telephoneNumber"
            autoCompleteType="tel"
            onChangeText={(text) => setPhone(text)}
            value={phone}
            placeholder="Phone Number"
          />
          <TextInput
            style={styles.fieldStyle}
            autoCompleteType="email"
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="Email"
          />
          <TextInput
            style={styles.fieldStyle}
            onChangeText={(text) => setCompany(text)}
            value={company}
            placeholder="Company Name"
          />
          <TextInput
            style={styles.fieldStyle}
            onChangeText={(text) => setProject(text)}
            value={project}
            placeholder="Project"
          />
          <TextInput
            style={styles.fieldStyle}
            onChangeText={(text) => setNotes(text)}
            value={notes}
            placeholder="Notes"
          />
          <View>
            <Button style={styles.addButton} title="ADD" onPress={onAddPress} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "space-between",
  },
  fieldStyle: {
    padding: 5,
    height: 30,
    borderColor: "#ccc",
    borderWidth: 1,
    marginVertical: 5,
    color: "orange",
    borderBottomColor: "teal",
  },
  addButton: {
    marginTop: 50,
  },
  title: {
    fontSize: 18,
  },
});

export default connect(null, actions)(AddPerson);
