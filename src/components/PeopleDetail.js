import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from "react-native";
import { connect } from "react-redux";
import colors from "../config/colors";
import { getTheme } from "react-native-material-kit";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import * as actions from "../actions";
import routes from "../navigation/routes";

function PeopleDetail({ person, noneSelected, deleteContact }) {
  const theme = getTheme();
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={require("../../assets/background.jpg")}
          style={[theme.cardImageStyle, styles.image]}
        />
        <EvilIcons name="user" size={100} style={styles.icon} />
        <EvilIcons
          name="close"
          size={30}
          style={styles.closeIcon}
          onPress={() => {
            noneSelected();
          }}
        />
        <Text style={[theme.cardTitleStyle, styles.title1]}>
          {person.firstName} {person.lastName}
        </Text>
        <Text style={[theme.cardTitleStyle, styles.title2]}>
          from {person.company}
        </Text>
        <View style={styles.textArea}>
          <MaterialIcons name="phone" size={40} style={styles.textIcon} />
          <Text style={theme.cardContentStyle}>{person.phone}</Text>
        </View>
        <View style={styles.textArea}>
          <MaterialIcons name="email" size={40} style={styles.textIcon} />
          <Text style={theme.cardContentStyle}>{person.email}</Text>
        </View>
        <View style={styles.textArea}>
          <MaterialIcons name="assignment" size={40} style={styles.textIcon} />
          <Text style={theme.cardContentStyle}>{person.project}</Text>
        </View>
        <View style={styles.textArea}>
          <MaterialIcons name="mode-edit" size={40} style={styles.textIcon} />
          <Text style={theme.cardContentStyle}>{person.notes}</Text>
        </View>
        <View style={styles.editArea}>
          <TouchableOpacity
            style={styles.sections}
            onPress={() => {
              noneSelected();
            }}
          >
            <MaterialIcons name="autorenew" size={40} style={styles.editIcon} />
            <Text style={theme.cardContentStyle}>EDIT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sections}
            onPress={() => {
              deleteContact(person._id);
              noneSelected();
            }}
          >
            <MaterialIcons name="delete" size={40} style={styles.editIcon} />
            <Text style={theme.cardContentStyle}>DELETE</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Image
            source={require("../../assets/call2x.png")}
            style={styles.actionImage}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../../assets/email2x.png")}
            style={styles.actionImage}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../../assets/sms2x.png")}
            style={styles.actionImage}
          />
        </TouchableOpacity>
        <View style={styles.actionArea}>
          <Text>Call</Text>
          <Text>Email</Text>
          <Text>SMS</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    paddingBottom: 20,
    marginBottom: 20,
    borderColor: "lightgrey",
    borderWidth: 0.5,
  },
  title1: {
    top: 10,
    left: 80,
    fontSize: 24,
  },
  title2: {
    top: 35,
    left: 82,
    fontSize: 18,
  },
  image: {
    flex: 0,
    height: 100,
    width: 333,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  closeIcon: {
    position: "absolute",
    top: 5,
    left: 295,
    color: "rgba(233,166,154,0.8)",
    backgroundColor: "rgba(255,255,255,0)",
  },
  icon: {
    position: "absolute",
    top: 15,
    left: 0,
    color: "white",
    backgroundColor: "rgba(255,255,255,0)",
  },
  textArea: {
    flexDirection: "row",
    paddingLeft: 20,
    paddingTop: 10,
    width: 260,
  },
  textIcons: {
    color: "#26a69a",
  },
  actionArea: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

const mapStateToProps = (state) => {
  return { person: state.personSelected };
};

export default connect(mapStateToProps, actions)(PeopleDetail);
