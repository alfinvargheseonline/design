import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import ShoppingBagbottom from "./ShoppingBagbottom";

const ShoppingBag = () => {
  const sizes = ["Small", "Medium", "Large", "Extra Large"];
  const quantities = ["1", "2", "3", "4"];

  const [selectedSize, setSelectedSize] = useState("Medium");
  const [selectedQuantity, setSelectedQuantity] = useState("1");

  const [sizeModalVisible, setSizeModalVisible] = useState(false);
  const [quantityModalVisible, setQuantityModalVisible] = useState(false);

  const renderOption = (option, onSelect) => (
    <TouchableOpacity style={styles.optionItem} onPress={() => onSelect(option)}>
      <Text style={styles.optionText}>{option}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.productSection}>
        <Image
          source={require("../assets/Images/Mask Group.png")} // Replace with your image source
          style={styles.productImage}
        />
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>Women’s Casual Wear</Text>
          <Text style={styles.variationsText}>Checked Single-Breasted Blazer</Text>

          {/* Size Selection */}
          <TouchableOpacity
            style={styles.dropdown}
            onPress={() => setSizeModalVisible(true)}
          >
            <Text style={styles.dropdownText}>Size: {selectedSize}</Text>
          </TouchableOpacity>

          {/* Quantity Selection */}
          <TouchableOpacity
            style={styles.dropdown}
            onPress={() => setQuantityModalVisible(true)}
          >
            <Text style={styles.dropdownText}>Quantity: {selectedQuantity}</Text>
          </TouchableOpacity>

          {/* Price and Delivery Information */}
          <View style={styles.priceDetails}>
            <Text style={styles.variationsText}>Delivery by </Text>
            <Text style={styles.currentPrice}>10 May 2XXX</Text>
          </View>
        </View>
      </View>

      {/* Size Selection Modal */}
      <Modal
        visible={sizeModalVisible}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Size</Text>
            <FlatList
              data={sizes}
              renderItem={({ item }) => renderOption(item, (size) => {
                setSelectedSize(size);
                setSizeModalVisible(false);
              })}
              keyExtractor={(item) => item}
            />
          </View>
        </View>
      </Modal>

      {/* Quantity Selection Modal */}
      <Modal
        visible={quantityModalVisible}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Quantity</Text>
            <FlatList
              data={quantities}
              renderItem={({ item }) => renderOption(item, (quantity) => {
                setSelectedQuantity(quantity);
                setQuantityModalVisible(false);
              })}
              keyExtractor={(item) => item}
            />
          </View>
        </View>
      </Modal>
      <ShoppingBagbottom/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    marginTop: 50,
    backgroundColor: "#fff",
  },
  productSection: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  productImage: {
    width: 140,
    height: 145,
    borderRadius: 10,
  },
  productDetails: {
    flex: 1,
    marginLeft: 15,
  },
  productTitle: {
    fontFamily: "outfit-Bold",
    fontSize: 18,
    marginBottom: 5,
  },
  variationsText: {
    fontFamily: "outfit-Regular",
    fontSize: 18,
    color: "#555",
    marginBottom: 5,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  dropdownText: {
    fontFamily: "outfit-Regular",
    fontSize: 14,
    color: "#333",
  },
  priceDetails: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10,
  },
  currentPrice: {
    fontFamily: "outfit-Bold",
    fontSize: 18,
    color: "#000",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    margin: 20,
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontFamily: "outfit-Bold",
    fontSize: 18,
    marginBottom: 20,
  },
  optionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  optionText: {
    fontSize: 16,
  },
});

export default ShoppingBag;
