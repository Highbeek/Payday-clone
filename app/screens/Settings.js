import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "../styles/styles";
import SettingsCard from "../components/settings/card";

export default function Settings() {
  return (
    <View style={styles.settingsContainer}>
      <View>
        <Text>Settings</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.userCover, styles.settingsUser]}>
          <View style={styles.userContainer}>
            <Text style={styles.user}>I</Text>
          </View>
        </View>
        <View style={styles.usernameContainer}>
          <Text style={styles.sUsername}>Ibukun Agboola</Text>
          <Text style={styles.username}>@highbeek</Text>
        </View>
        <TouchableOpacity style={styles.settingsBtn}>
          <Text style={styles.sBtnText}>Edit Button</Text>
        </TouchableOpacity>
        <View style={styles.settingsCard}>
          <SettingsCard />
        </View>
        <View style={styles.versionC}>
          <Text style={styles.vText}>Version 0.0.0</Text>
        </View>
      </ScrollView>
    </View>
  );
}
