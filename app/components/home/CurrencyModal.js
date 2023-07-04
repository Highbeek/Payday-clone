import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { currencies } from "../../constants/doc";

const CurrencyModal = ({
  isVisible,
  selectedCurrency,
  onSelectCurrency,
  onCloseModal,
}) => {
  const handleCurrencySelect = (currency) => {
    onSelectCurrency(currency);
    onCloseModal();
  };

  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Accounts</Text>
          {currencies.map((currency, index) => (
            <TouchableOpacity
              key={index}
              style={styles.currencyOption}
              onPress={() => handleCurrencySelect(currency)}
            >
              <Image source={{ uri: currency.flag }} style={styles.flag} />
              <View style={styles.currencyDetails}>
                <Text style={styles.currencyText}>{currency.currency}</Text>
                <Text>{currency.balance} </Text>
              </View>
              <View style={styles.checkboxContainer}>
                {currency === selectedCurrency && (
                  <View style={styles.checkbox} />
                )}
              </View>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.closeButton} onPress={onCloseModal}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "100%",
    maxHeight: "70%",
    height: "70%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  currencyOption: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  checkboxContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "green",
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  checkbox: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "green",
  },
  flag: {
    width: 30,
    height: 30,
    borderRadius: 100,
    marginRight: 10,
  },
  currencyDetails: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  currencyText: {
    fontSize: 16,
  },
  closeButton: {
    marginTop: 20,
    alignSelf: "flex-end",
  },
  closeButtonText: {
    color: "blue",
    fontSize: 16,
  },
});

export default CurrencyModal;
