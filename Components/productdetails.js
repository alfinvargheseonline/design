import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
import { Card, Rating } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const Productdetails = () => {
  const [products, setProducts] = useState([]);
  const flatListRef = useRef(null);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const goToNext = () => {
    flatListRef.current.scrollToIndex({ index: 1, animated: true });
  };

  const goToPrevious = () => {
    flatListRef.current.scrollToIndex({ index: 0, animated: true });
  };

  const renderItem = ({ item }) => (
    <Card containerStyle={styles.card}>
      <TouchableOpacity
        onPress={() => {
          /* Handle image press */
        }}
      >
        <Image source={{ uri: item.image }} style={styles.imagecard} />
      </TouchableOpacity>
      <Text style={styles.textcard}>{item.title}</Text>
      {/* <Text style={styles.textcard1}>{item.description}</Text> */}
      <Text style={styles.priceTag}>₹{item.price}</Text>
      <Text style={styles.offerTag}>
        {/* Displaying offer percentage dynamically based on price */}
        {Math.round((1 - item.price / 2499) * 100)}% OFF
      </Text>
    </Card>
  );

  return (
    <View style={styles.container2}>
      <View style={styles.arrowContainer}>
        <TouchableOpacity onPress={goToPrevious}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={goToNext}>
          <Ionicons name="arrow-forward" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={flatListRef}
        pagingEnabled
      />

      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  card: {
    width: width * 0.5,
    marginHorizontal: 10,
    padding: 0,
    elevation: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  imagecard: {
    width: "55%", // Slightly smaller than the card width
    height: 150, // Reduced height for smaller size
    marginTop: 10, // Reduced margin for better alignment
    alignSelf: "center",
  },
  textcard: {
    marginBottom: 0,
    textAlign: "center",
    fontFamily: "outfit-Regular",
    fontSize: 16,
    marginVertical: 5,
  },
  textcard1: {
    textAlign: "center",
    fontSize: 14,
    color: "gray",
    marginVertical: 5,
  },
  priceTag: {
    fontSize: 16,
    fontFamily: "outfit-Bold",
    color: "#000",
    textAlign: "center",
    marginTop: 5,
  },
  offerTag: {
    fontSize: 14,
    color: "red",
    textAlign: "center",
    marginTop: 5,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  rating: {
    alignSelf: "flex-start",
  },
  ratingCount: {
    marginLeft: 5,
    color: "gray",
  },
  arrowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
});

export default Productdetails;
