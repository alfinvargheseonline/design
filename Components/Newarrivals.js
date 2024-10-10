import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons

export default function Newarrival() {
  return (
    <View style={styles.containerDeal}>
      <Image
        source={require(".././assets/Images/Mask Group 1.png")}
        style={styles.profileImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.carouselText1}>New Arrivals</Text>
        <Text style={styles.Text}>Summer’ 25 Collections</Text>
      </View>
      <TouchableOpacity style={styles.viewAllButton}>
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>View all</Text>
          <Ionicons name="arrow-forward" size={20} color="#fff" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    width: "100%",
    height: 200,
    marginLeft: 0,
    marginTop: 8,
    marginRight: 15,
    marginBottom: 8,
  },
  containerDeal: {
    width: "100%", // Set to full width
    height: 280, // Set height
    backgroundColor: "#fff",
    flexDirection: "row",
    marginTop: 2,
    marginBottom: 8,
    position: "relative", // Allow absolute positioning within this container
  },
  textContainer: {
    position: "absolute", // Allow absolute positioning
    bottom: 10, // Align text vertically at the bottom
    left: 15, // Align text to the left
    flexDirection: "column", // Stack texts vertically
    justifyContent: "center", // Align the text vertically in the middle
  },
  Text: {
    fontFamily: "outfit-Regular",
    fontSize: 14,
  },
  carouselText1: {
    fontFamily: "outfit-SemiBold",
    fontSize: 25,
    marginBottom: 5, // Added space between the two texts
  },
  viewAllButton: {
    position: "absolute",
    left: 285,
    top: "85%",
    transform: [{ translateY: -16 }],
    borderWidth: 1,
    borderColor: "#fff",
    width: 130,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#F83758",
    justifyContent: "center",
    alignItems: "center",
    // Center the icon vertically
  },
  buttonContent: {
    flexDirection: "row", // Align text and icon horizontally
    alignItems: "center", // Vertically center both text and icon
  },
  buttonText: {
    color: "#fff", // White text color
    fontFamily: "outfit-SemiBold",
    marginRight: 5,
    fontSize: 18, // Space between text and icon
  },
});
