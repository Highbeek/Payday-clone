import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";

import { styles } from "../styles/styles";
import { MaterialIcons, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { cards } from "../constants/doc";

export default function Cards() {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardHeaderText}>Cards</Text>
        <View style={styles.cardHeaderIcon}>
          <FontAwesome5 name="dollar-sign" size={16} color="#fff" />
        </View>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.rowContainer}>
          {cards.map(
            ({ uid, img, cardType, cardText, amount, transFee, secure }) => (
              <View key={uid} style={styles.cardImgContainer}>
                <Image source={img} style={styles.cardImg} />
                <>
                  <Text style={styles.cardType}>{cardType}</Text>
                  <Text style={styles.cardText}>{cardText}</Text>
                  <View style={styles.cardDetails}>
                    <View style={styles.carddet}>
                      <View style={styles.cardIcon}>
                        <Ionicons
                          name="ios-card-sharp"
                          size={16}
                          color="gray"
                        />
                      </View>
                      <View style={styles.detailsText}>
                        <Text style={styles.cardDetailsText}>
                          Card creation fee
                        </Text>
                        <View style={styles.detailsa}>
                          <Text style={styles.cardDetailsInputa}>
                            {amount}{" "}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.carddet}>
                      <View style={styles.cardIcon}>
                        <View style={styles.carddol}>
                          <FontAwesome5
                            name="dollar-sign"
                            size={8}
                            color="gray"
                          />
                        </View>
                      </View>
                      <View style={styles.detailsText}>
                        <Text style={styles.cardDetailsText}>
                          Transaction fees
                        </Text>
                        <Text style={styles.cardDetailsInput}>{transFee} </Text>
                      </View>
                    </View>
                    <View style={styles.carddet}>
                      <View style={styles.cardIcon}>
                        <MaterialIcons name="lock" size={16} color="gray" />
                      </View>
                      <View style={styles.detailsText}>
                        <Text style={styles.cardDetailsText}>3D Secure</Text>
                        <Text style={styles.cardDetailsInput}>{secure} </Text>
                      </View>
                    </View>
                  </View>
                </>
                <TouchableOpacity style={styles.cardBtn}>
                  <Text style={styles.cardBtnText}>Create Mastercard</Text>
                </TouchableOpacity>
              </View>
            )
          )}
        </View>
      </ScrollView>
    </View>
  );
}
