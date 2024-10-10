import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons"; // Assuming you're using Expo, otherwise install react-native-vector-icons
import { useNavigation } from "@react-navigation/native";

const ShoppingBagbottom = () => {
  const navigation = useNavigation();
  return (
    <View>
      {/* Apply Coupon Section */}
      <View style={styles.container}>
        {/* Left side: Icon and Text */}
        <View style={styles.leftContainer}>
          <Ionicons
            name="cash-outline"
            size={24}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.text}>Apply Coupon</Text>
        </View>

        {/* Right side: Select Option */}
        <TouchableOpacity>
          <Text style={styles.selectText}>Select</Text>
        </TouchableOpacity>
      </View>

      {/* Order Payment Details Section */}
      <View style={styles.orderDetailsContainer}>
        <Text style={styles.orderDetailsTitle}>Order Payment Details</Text>

        {/* Order Amount Row */}
        <View style={styles.row}>
          <Text style={styles.leftText}>Order Amount</Text>
          <Text style={styles.rightText1}>₹7000</Text>
        </View>

        {/* Convenience Row */}
        <View style={styles.row}>
          <Text style={styles.leftText}>
            Convenience <Text style={styles.linkText}>Know More</Text>{" "}
          </Text>
          <TouchableOpacity>
            <Text style={styles.linkText}>Apply Coupon</Text>
          </TouchableOpacity>
        </View>

        {/* Delivery Fee Row */}
        <View style={styles.row}>
          <Text style={styles.leftText}>Delivery Fee</Text>
          <Text style={styles.rightText}>Free</Text>
        </View>
      </View>

      {/* Order Total and EMI Section */}
      <View style={styles.orderTotalContainer}>
        {/* Order Total Row */}
        <View style={styles.row}>
          <Text style={styles.leftText}>Order Total</Text>
          <Text style={styles.rightText2}>₹7000</Text>
        </View>
        {/* EMI Available Row */}
        <View style={styles.row}>
          <Text style={styles.emiText}>
            EMI Available <Text style={styles.linkText}>Details</Text>
          </Text>
        </View>
      </View>

      {/* Proceed to Payment Section */}
      <View style={styles.paymentContainer}>
        <View style={styles.paymentRow}>
          <View style={styles.amountColumn}>
            <Text style={styles.rightText2}>₹7000.00</Text>
            <TouchableOpacity>
              <Text style={styles.viewDetailsLink}>View Details</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.paymentButton}
            onPress={() => navigation.navigate("Payment")}
          >
            <Text style={styles.paymentButtonText}>Proceed to Payment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    marginVertical: 10,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontFamily: "outfit-Regular", // Use your preferred font
    fontSize: 16,
    color: "#333",
  },
  selectText: {
    fontFamily: "outfit-Bold", // Use your preferred font
    fontSize: 16,
    color: "#F83758",
  },
  orderDetailsContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    marginVertical: 10,
  },
  orderDetailsTitle: {
    fontFamily: "outfit-Bold",
    fontSize: 18,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  row1: {
    justifyContent: "space-between",
    marginVertical: 5,
  },
  leftText: {
    fontFamily: "outfit-Regular",
    fontSize: 16,
    color: "#333",
  },
  rightText1: {
    fontFamily: "outfit-Bold",
    fontSize: 16,
  },
  rightText2: {
    fontFamily: "outfit-Bold",
    fontSize: 18,
  },
  emiText: {
    fontFamily: "outfit-Regular",
    fontSize: 16,
    color: "#333",
  },
  linkText: {
    fontFamily: "outfit-SemiBold",
    fontSize: 14,
    color: "#F83758",
  },
  orderTotalContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    marginVertical: 10,
  },
  paymentContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    marginVertical: 1,
  },
  paymentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  amountColumn: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  paymentButton: {
    backgroundColor: "#F83758",
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: 200,
    height: 50,
    borderRadius: 5,
  },
  paymentButtonText: {
    color: "#fff",
    fontFamily: "outfit-SemiBold",
    fontSize: 16,
  },
  viewDetailsLink: {
    fontFamily: "outfit-Regular",
    fontSize: 14,
    color: "#F83758",
    marginTop: 4,
  },
  rightText2: {
    fontFamily: "outfit-Bold",
    fontSize: 18,
  },
});

export default ShoppingBagbottom;
