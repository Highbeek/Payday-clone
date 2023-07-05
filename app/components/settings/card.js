import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { settingsCard } from "../../constants/doc";
import { AntDesign } from "@expo/vector-icons";

export default function SettingsCard() {
  return (
    <View style={styles.container}>
      {settingsCard.map(({ uid, icon, action, text }) => (
        <View key={uid} style={styles.cover}>
          <View style={styles.cardIcon}>{icon}</View>
          <View style={styles.cardText}>
            <Text style={styles.cardTexta}>{action}</Text>
            <Text style={styles.cardTextb}>{text}</Text>
          </View>
          <Pressable style={styles.icon}>
            <AntDesign name="right" size={15} color="black" />
          </Pressable>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical:8,
  },
  cover: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical:10,
  },
  cardIcon: {
    height: 35,
    width: 35,
    borderRadius: 100,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
  cardText: {
    paddingHorizontal: 20,
    gap:8
  },
  icon: {
    marginLeft: "auto",
  },
  cardTexta:{
    fontWeight:500,
    fontSize:14,
  },
  cardTextb:{
    opacity:.5,
    fontSize:12
  }
});
