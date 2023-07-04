import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  StatusBar,
  ScrollView,
} from "react-native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
  Entypo,
  Feather,
  FontAwesome,
} from "@expo/vector-icons";
import { styles } from "../styles/styles";
import { useNavigation } from "@react-navigation/native";
import { balloon } from "../assets/images/index";
import { TransactionList } from "../components/home/TransactionList";
import CurrencyModal from "../components/home/CurrencyModal";
import { currencies } from "../constants/doc";
export default function Home() {
  const [isCurrencyModalVisible, setIsCurrencyModalVisible] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const navigation = useNavigation();
  const currency = "$";

  const openCurrencyModal = () => {
    setIsCurrencyModalVisible(true);
  };

  const closeCurrencyModal = () => {
    setIsCurrencyModalVisible(false);
  };

  const handleSelectCurrency = (currency) => {
    setSelectedCurrency(currency);
    setIsCurrencyModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <View style={styles.userHeader}>
          <View style={styles.userCover}>
            <View style={styles.userContainer}>
              <Text style={styles.user}>I</Text>
            </View>
          </View>
          <Pressable style={styles.currency} onPress={openCurrencyModal}>
            <Image
              source={{ uri: selectedCurrency.flag }}
              style={styles.flag}
            />
            <Text style={styles.currencyText}>
              {" "}
              {selectedCurrency.currency || "Select Currency"}
            </Text>
            <View style={styles.headerIcon}>
              <MaterialIcons name="arrow-drop-down" size={20} color="black" />
            </View>
          </Pressable>
          <View style={styles.headerIcons}>
            <MaterialCommunityIcons name="bell" size={23} color="#fff" />
            <View style={styles.cuIcon}>
              <FontAwesome5 name="dollar-sign" size={16} color="black" />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.userHead}>
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
                  <FontAwesome name="refresh" size={18} color="black" />
                </View>
                <Text style={styles.optionText}>Swap</Text>
              </View>
              <View style={styles.options}>
                <View style={styles.option}>
                  <Entypo
                    name="dots-three-horizontal"
                    size={18}
                    color="black"
                  />
                </View>
                <Text style={styles.optionText}>More</Text>
              </View>
            </View>
          </View>

          <View style={styles.userAction}>
            <View style={styles.action}>
              <View style={styles.actionIcon}>
                <MaterialCommunityIcons
                  name="arrow-up-bold-circle"
                  size={26}
                  color="black"
                />
              </View>
              <View style={styles.userActionText}>
                <Text style={styles.actionTextTitle}>Send money</Text>
                <Text style={styles.actionText}>
                  Transfer money locally or abroad
                </Text>
              </View>
            </View>
            <View style={styles.action}>
              <View style={styles.actionIcon}>
                <MaterialCommunityIcons
                  name="arrow-down-bold-circle"
                  size={26}
                  color="black"
                />
              </View>
              <View style={styles.userActionText}>
                <Text style={styles.actionTextTitle}>Request money</Text>
                <Text style={styles.actionText}>
                  Get cash from a contact or via a link
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.userHero}>
            <Text style={styles.userHeroText}>Refer & earn</Text>
            <View style={styles.heroContainer}>
              <Text style={styles.heroText} numberOfLines={3}>
                Earn $3 every time you invite a friend (T&amp;C's apply)
              </Text>
              <Image source={balloon} style={styles.heroImg} />
            </View>
          </View>
          <View style={styles.userTransaction}>
            <View style={styles.userTransact}>
              <View style={styles.transOption}>
                <Text style={styles.transOptionTexta}>Recent</Text>
                <Pressable>
                  <Text style={styles.transOptionTextb}>VIEW ALL</Text>
                </Pressable>
              </View>
              <View>
                <TransactionList />
              </View>
            </View>
          </View>
          <CurrencyModal
            isVisible={isCurrencyModalVisible}
            currencies={currencies}
            selectedCurrency={selectedCurrency}
            onSelectCurrency={handleSelectCurrency}
            onCloseModal={closeCurrencyModal}
          />
        </ScrollView>
      </View>
    </View>
  );
}
