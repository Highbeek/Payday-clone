import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import {
  Octicons,
  Ionicons,
  Entypo,
  Foundation
} from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const BottomNavigation = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  const isActiveScreen = (screenName) => {
    return route.name === screenName;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigateToScreen("Home")}
        style={[
          styles.iconContainer,
          isActiveScreen("Home") ? styles.activeIconContainer : null,
        ]}
      >
        <Foundation name="home" size={24} color="black" />
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToScreen("Cards")}
        style={[
          styles.iconContainer,
          isActiveScreen("Cards") ? styles.activeIconContainer : null,
        ]}
      >
        <Ionicons name="card" size={24} color="black" />
        <Text style={styles.text}>Cards</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToScreen("Transactions")}
        style={[
          styles.iconContainer,
          isActiveScreen("Transactions") ? styles.activeIconContainer : null,
        ]}
      >
        <Entypo name="circular-graph" size={24} color="black" />
        <Text style={styles.text}>Transactions</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToScreen("Settings")}
        style={[
          styles.iconContainer,
          isActiveScreen("Settings") ? styles.activeIconContainer : null,
        ]}
      >
        <Ionicons name="ios-settings-sharp" size={24} color="black" />

        <Text style={styles.text}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 25,
    height: 100,
    borderColor: "#ccc",
    backgroundColor: "transparent",
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "transparent",
  },
  activeIconContainer: {
    backgroundColor: "blue",
  },
  text:{
    fontSize:10,
  paddingVertical:5,
  color:'#000'
  }
});

export default BottomNavigation;
