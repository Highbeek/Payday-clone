import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Image,
  StatusBar,
} from "react-native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
  Entypo,
  Feather,
  FontAwesome,
} from "@expo/vector-icons";
import styles from "../styles/styles";

export default function Home() {
  const currency = "\u20A6";
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#242424" barStyle="dark-content" />

      <View style={styles.header}>
        <View style={styles.userCover}>
          <View style={styles.userContainer}>
            <Text style={styles.user}>I</Text>
          </View>
        </View>
        <Pressable style={styles.currency}>
          <Image
            source={{
              uri: "https://cdn.britannica.com/68/5068-004-72A3F250/Flag-Nigeria.jpg",
            }}
            style={styles.flag}
          />
          <Text style={styles.currencyText}>NG Naira </Text>
          <View style={styles.headerIcon}>
            <MaterialIcons name="arrow-drop-down" size={20} color="black" />
          </View>
        </Pressable>
        <View style={styles.headerIcons}>
          <MaterialCommunityIcons name="bell" size={23} color="#fff" />
          <View style={styles.cuIcon}>
            <FontAwesome5 name="dollar-sign" size={16} color="black"  />
          </View>
        </View>
      </View>
      <View style={styles.balance}>
        <Text style={styles.symbol}>{currency}</Text>
        <Text style={styles.amount}>341</Text>
        <Text style={styles.amountRem}>.27</Text>
      </View>
      <View style={styles.headerOptions}>
        <View style={styles.options}>
          <View style={styles.option}>
            <Entypo name="plus" size={18} color="black" />
          </View>
          <Text style={styles.optionText}>Top up</Text>
        </View>
        <View style={styles.options}>
          <View style={styles.option}>
            {/* <Feather name="refresh-cw" size={18} color="black" /> */}
            <FontAwesome name="refresh" size={18} color="black" />
          </View>
          <Text style={styles.optionText}>Swap</Text>
        </View>
        <View style={styles.options}>
          <View style={styles.option}>
            <Entypo name="dots-three-horizontal" size={18} color="black" />
          </View>
          <Text style={styles.optionText}>More</Text>
        </View>
      </View>
    </View>
  );
}
