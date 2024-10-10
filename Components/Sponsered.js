import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons

export default function Sponsored() {
  return (
    <View style={styles.containerDeal}>
      <Text style={styles.carouselText1}>Sponsored</Text>
      <View style={styles.container2}>
        <Image
          source={require(".././assets/Images/Mask Group 2.png")}
          style={styles.profileImage}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    width: "95%",
    height: "80%",
    resizeMode: "cover",
    borderRadius: 8,
    marginLeft:50,
    marginRight:50,
    marginTop:0 // Ensure the image covers the container
  },
  containerDeal: {
    width: "100%", // Set to full width
    height: 400, // Set height
    backgroundColor: "#fff",
    marginTop: 8,
    
    marginBottom: 8,
    position: "relative", // Allow absolute positioning within this container
  },
  container2: {
    width: "100%", // Set to full width
    height: "100%", // Set to full height of the parent
    justifyContent: "center", // Center the content vertically
    alignItems: "center", // Center the content horizontally
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
    marginLeft:20,
    marginTop:10,
    marginBottom: 0, // Added space between the two texts
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
