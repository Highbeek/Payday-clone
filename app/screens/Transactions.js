import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Foundation } from "@expo/vector-icons";
import { styles } from "../styles/styles";
import { HomeTransactionList } from "../components/transaction/homeTrans";

export default function Transactions() {
  return (
    <View style={styles.transContainer}>
      <View style={styles.cardHeader}>
        <Text style={[styles.cardHeaderText]}>Transactions</Text>
        <Foundation
          name="download"
          size={24}
          color="black"
          style={styles.transHeaderIcon}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.transCards}>
          <HomeTransactionList />
        </View>
      </ScrollView>
    </View>
  );
}
