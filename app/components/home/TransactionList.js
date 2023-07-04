import React from "react";
import { View, Image, Text, FlatList, StyleSheet } from "react-native";
import { transactions } from "../../constants/doc";
import { Ionicons } from "@expo/vector-icons";

export const TransactionList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <View style={styles.transC}>
        <View style={styles.left}>
          {typeof item.img === "string" ? (
            <Image source={{ uri: item.img }} style={styles.img} />
          ) : (
            <View style={[styles.img, item.img.style]}>
              <Ionicons
                name={item.img.name}
                size={item.img.size}
                color={item.img.color}
              />
            </View>
          )}
          <View style={styles.recipe}>
            <Text style={styles.rec}>{item.recipient}</Text>
            <Text style={styles.transTime}>{item.time}</Text>
          </View>
        </View>
        <View>
          <Text>{item.formattedAmount}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={transactions}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      scrollEnabled={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  transC: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginVertical: 10,
  },
  left: {
    flexDirection: "row",
    gap: 12,
  },
  recipe: {
    gap: 5,
  },
  rec: {
    fontWeight: "500",
  },
  transTime: {
    color: "#bfbfbf",
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
