import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Rating } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const Checkout = () => {
  const [selectedVariation, setSelectedVariation] = useState("Black");
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>Checkout</Text>

        {/* Address Section */}
        <View style={styles.container1}>
          <TouchableOpacity style={styles.editProfileButton}>
            <Ionicons name="location" size={20} color="black" />
          </TouchableOpacity>
          <Text style={styles.totalOrderText}>Delivery Address</Text>
          <Text style={styles.totalOrderText}></Text>
        </View>
        <View style={styles.addressSection}>
          <Text style={styles.label}>Address :</Text>
          <Text style={styles.addressText}>
            {"\n"}216 St Paul's Rd, London N1 2LL, UK{"\n"}Contact: +44-784232
          </Text>
          <View style={styles.addressIcons}>
            <TouchableOpacity>
              <Ionicons name="create-outline" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="add-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Product Section 1 */}
        <View style={styles.productSection}>
          <Image
            source={require("../assets/Images/Mask Group.png")} // Replace with your image source
            style={styles.productImage}
          />
          <View style={styles.productDetails}>
            <Text style={styles.productTitle}>Women’s Casual Wear</Text>
            <Text style={styles.variationsText}>Variations:</Text>

            {/* Color Variation Buttons */}
            <View style={styles.variationsContainer}>
              <TouchableOpacity
                style={[
                  styles.variationButton,
                  selectedVariation === "Black" && styles.selectedVariation,
                ]}
                onPress={() => setSelectedVariation("Black")}
              >
                <Text style={styles.variationText}>Black</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.variationButton,
                  selectedVariation === "Red" && styles.selectedVariation,
                ]}
                onPress={() => setSelectedVariation("Red")}
              >
                <Text style={styles.variationText}>Red</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.ratingPrice}>
              <Text style={styles.rating}>
                4.5
                <Rating
                  style={styles.rating}
                  startingValue="4.5"
                  imageSize={12}
                  readonly
                />
              </Text>
              <View style={styles.priceDetails}>
                <TouchableOpacity style={styles.variationButton1}>
                  <Text style={styles.currentPrice}>$45.00</Text>
                </TouchableOpacity>
                <Text style={styles.oldPrice}>$67.00</Text>
                <Text style={styles.discount}>upto 28% off</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Total Order Section */}
        <View style={styles.container1}>
          <Text style={styles.totalOrderText}>Total Order (1):</Text>
          <Text style={styles.totalOrderText1}>$45.00</Text>
        </View>

        {/* Product Section 2 (Repeated) */}
        <View style={styles.productSection}>
          <Image
            source={require("../assets/Images/Mask Group.png")} // Replace with your image source
            style={styles.productImage}
          />
          <View style={styles.productDetails}>
            <Text style={styles.productTitle}>Women’s Casual Wear</Text>
            <Text style={styles.variationsText}>Variations:</Text>

            {/* Color Variation Buttons */}
            <View style={styles.variationsContainer}>
              <TouchableOpacity
                style={[
                  styles.variationButton,
                  selectedVariation === "Green" && styles.selectedVariation,
                ]}
                onPress={() => setSelectedVariation("Green")}
              >
                <Text style={styles.variationText}>Green</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.variationButton,
                  selectedVariation === "Grey" && styles.selectedVariation,
                ]}
                onPress={() => setSelectedVariation("Grey")}
              >
                <Text style={styles.variationText}>Grey</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.ratingPrice}>
              <Text style={styles.rating}>
                3.5
                <Rating
                  style={styles.rating}
                  startingValue="3.5"
                  imageSize={12}
                  readonly
                />
              </Text>
              <View style={styles.priceDetails}>
                <TouchableOpacity style={styles.variationButton1}>
                  <Text style={styles.currentPrice}>$45.00</Text>
                </TouchableOpacity>
                <Text style={styles.oldPrice}>$67.00</Text>
                <Text style={styles.discount}>upto 28% off</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.container1}>
          <Text style={styles.totalOrderText}>Total Order (1):</Text>
          <Text style={styles.totalOrderText1}>$45.00</Text>
        </View>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => navigation.navigate("ShoppingBag")}
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  saveButton: {
    backgroundColor: "#F83758",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    padding: 15,
    marginTop: 50,
    backgroundColor: "#f9f9f9",
  },
  container1: {
    flexDirection: "row",
    justifyContent: "space-between", // Align items between the available space
    padding: 15,
    backgroundColor: "#fff",
    marginTop: 1,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontFamily: "outfit-Bold",
    textAlign: "center", // Align title in the center
    marginBottom: 15,
  },
  addressSection: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontFamily: "outfit-SemiBold",
    fontSize: 18,
  },
  addressText: {
    flex: 1,
    marginLeft: 10,
    fontFamily: "outfit-Regular",
  },
  addressIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 60,
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
    fontSize: 16,
    marginBottom: 5,
  },
  variationsText: {
    fontSize: 14,
    marginBottom: 10,
    fontFamily: "outfit-Regular",
  },
  variationsContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  variationButton: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    backgroundColor: "transparent",
  },
  selectedVariation: {
    borderColor: "#000",
    backgroundColor: "#f1f1f1",
  },
  variationText: {
    fontFamily: "outfit-SemiBold",
    color: "#555",
  },
  ratingPrice: {
    justifyContent: "space-between",
    alignItems: "",
  },
  rating: {
    fontSize: 14,
    fontFamily: "outfit-Bold",
    color: "#555",
    flexDirection: "row",
    marginLeft: 1,
  },
  priceDetails: {
    flexDirection: "row",
    justifyContent: "flex-start", // Align the oldPrice and discount on the left
    alignItems: "center",
    marginTop: 10,
  },
  currentPrice: {
    fontFamily: "outfit-Bold",
    fontSize: 22,
    color: "#000",
    marginRight: 20, // Ensures it remains aligned on the right
  },
  oldPrice: {
    textDecorationLine: "line-through",
    color: "#999",
    fontSize: 14,
    fontFamily: "outfit-Bold",
    marginRight: 10, // Adds space between oldPrice and discount
  },
  discount: {
    color: "red",
    fontSize: 12,
    fontFamily: "outfit-Regular",
  },
  totalOrderText: {
    fontFamily: "outfit-Bold",
    fontSize: 16,
    marginLeft: 20,
  },
  totalOrderText1: {
    fontFamily: "outfit-Bold",
    fontSize: 16,
    marginLeft: 20,
  },

  variationButton1: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    marginLeft: 20,
    backgroundColor: "transparent",
  },
  editProfileButton: {
    position: "absolute",
    borderRadius: 15,
    marginTop: 10,
    marginLeft: 10,
    width: 40,
    height: 30,
  },
});

export default Checkout;
