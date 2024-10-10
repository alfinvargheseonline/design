import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; // Import the useNavigation hook

export default function Offer() {
  const navigation = useNavigation(); // Use the useNavigation hook

  console.log("Offer component mounted");
  console.log("Navigation prop:", navigation);

  return (
    <View>
      <View style={styles.containerDeal}>
        <Image
          source={require("../assets/Images/Rectangle 56.png")}
          style={styles.profileImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.carouselText1}>Special Offers</Text>
          <Text style={styles.Text}>
            We make sure you get the{"\n"}offer you need at best prices
          </Text>
        </View>
      </View>

      <View style={styles.containerDeal1}>
        <Image
          source={require("../assets/Images/Rectangle 54.png")}
          style={styles.rectangle54}
        />
        <Image
          source={require("../assets/Images/Group.png")}
          style={styles.groupImage}
        />
        <Image
          source={require("../assets/Images/Rectangle 55.png")}
          style={styles.rectangle55}
        />

        <Text style={styles.carouselText2}>Flat and Heels</Text>
        <Text style={styles.Text1}>Stand a chance to get rewarded</Text>
        <TouchableOpacity style={styles.carouselButton1}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>Visit now</Text>
            <Ionicons name="arrow-forward" size={24} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.containerDeal2}>
        <Text style={styles.carouselText4}>Trending Products</Text>
        <View style={styles.remainingTimeContainer}>
          <Icon
            name="calendar-outline"
            size={16}
            color="#fff"
            style={styles.alarmIcon}
          />
          <Text style={styles.carouselText3}>Last Date 29/02/2024</Text>
        </View>
        <TouchableOpacity 
          style={styles.carouselButton2} 
          onPress={() => navigation.push('Trending')}
        >
          <Text style={styles.buttonText1}>View all</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    width: 100,
    height: 80,
    marginLeft: 15,
    marginTop: 8,
    marginBottom: 8,
  },
  containerDeal: {
    width: "100%",
    height: 100,
    backgroundColor: "#fff",
    flexDirection: "row",
    marginTop: 2,
    marginBottom: 8,
  },
  textContainer: {
    flexDirection: "column",
    marginLeft: 15,
    justifyContent: "center",
  },
  containerDeal1: {
    width: "100%",
    height: 170,
    backgroundColor: "#fff",
    marginTop: 15,
    marginBottom: 8,
    position: 'relative',
  },
  rectangle54: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  groupImage: {
    position: "absolute",
    top: 10,
    left: 10,
  },
  rectangle55: {
    width: 120,
    height: 120,
    position: "absolute",
    top: 20,
    left: 50,
  },
  carouselText1: {
    fontFamily: "outfit-SemiBold",
    fontSize: 25,
    marginBottom: 5,
  },
  carouselText2: {
    fontFamily: "outfit-SemiBold",
    fontSize: 25,
    marginBottom: 5,
    marginLeft: 200,
    marginTop: 25,
  },
  Text: {
    fontFamily: "outfit-Regular",
    fontSize: 14,
  },
  Text1: {
    fontFamily: "outfit-Regular",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 30,
    marginLeft: 150,
    alignSelf: "center",
  },
  carouselButton1: {
    position: "absolute",
    left: 285,
    top: "70%",
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontFamily: "outfit-SemiBold",
    fontSize: 16,
    marginRight: 10,
  },
  carouselText3: {
    fontSize: 14,
    color: "#fff",
    fontFamily: "outfit-Regular",
    marginLeft: 5,
  },
  remainingTimeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  alarmIcon: {
    marginRight: 0,
  },
  containerDeal2: {
    width: "100%",
    height: 70,
    backgroundColor: "#FD6E87",
    paddingBottom: 10,
    borderRadius: 8,
    marginTop: 20,
    marginHorizontal: 10,
  },
  carouselText4: {
    fontSize: 18,
    color: "#fff",
    fontFamily: "outfit-SemiBold",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    textAlign: "left",
  },
  carouselButton2: {
    position: "absolute",
    left: 270,
    top: "50%",
    transform: [{ translateY: -16 }],
    borderWidth: 1,
    borderColor: "#fff",
    width: 100,
    height: 40,
    borderRadius: 8,
    backgroundColor: "transparent",
  },
  buttonText1: {
    color: "#fff",
    fontSize: 16,
    marginTop: 7,
    fontFamily: "outfit-SemiBold",
    textAlign: "center",
  },
});
