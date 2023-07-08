import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";

import { styles } from "../styles/styles";
import { MaterialIcons, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { cards } from "../constants/doc";

export default function Cards() {
  const [selectedCard, setSelectedCard] = useState(cards[0]);

  const handleCardScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const cardIndex = Math.round(contentOffsetX / styles.cardImg.width);
    const selectedCard = cards[cardIndex] || {};
    setSelectedCard(selectedCard);
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardHeaderText}>Cards</Text>
        <View style={styles.cardHeaderIcon}>
          <FontAwesome5 name="dollar-sign" size={16} color="#fff" />
        </View>
      </View>

      <ScrollView style={styles.cardScrollView}>
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={handleCardScroll}
        >
          <View style={styles.rowContainer}>
            {cards.map(({ uid, img }) => (
              <View key={uid} style={styles.cardImgContainer}>
                <Image source={img} style={styles.cardImg} />
              </View>
            ))}
          </View>
        </ScrollView>

        <View style={styles.cardCard}>
          <Text style={styles.cardType}>{selectedCard.cardType}</Text>
          <Text style={styles.cardText}>{selectedCard.cardText}</Text>

          <View style={styles.cardDetails}>
            <View style={styles.carddet}>
              <View style={styles.cardIcon}>
                <Ionicons name="ios-card-sharp" size={16} color="gray" />
              </View>
              <View style={styles.detailsText}>
                <Text style={styles.cardDetailsText}>Card creation fee</Text>
                <View style={styles.detailsa}>
                  <Text style={styles.cardDetailsInputa}>
                    {selectedCard.amount}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.carddet}>
              <View style={styles.cardIcon}>
                <View style={styles.carddol}>
                  <FontAwesome5 name="dollar-sign" size={8} color="gray" />
                </View>
              </View>
              <View style={styles.detailsText}>
                <Text style={styles.cardDetailsText}>Transaction fees</Text>
                <Text style={styles.cardDetailsInput}>
                  {selectedCard.transFee}
                </Text>
              </View>
            </View>
            <View style={styles.carddet}>
              <View style={styles.cardIcon}>
                <MaterialIcons name="lock" size={16} color="gray" />
              </View>
              <View style={styles.detailsText}>
                <Text style={styles.cardDetailsText}>3D Secure</Text>
                <Text style={styles.cardDetailsInput}>
                  {selectedCard.secure}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.cardBtn}>
          <Text style={styles.cardBtnText}>Create Mastercard</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
