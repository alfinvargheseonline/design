import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { Ionicons } from "@expo/vector-icons";
import SliderPage from "./SliderPage";
const ShopPageBottom = () => {
  return (
    <ScrollView>
    <View>
      <View style={styles.container1}>
        <Text style={styles.Text}>Delivery in </Text>
        <Text style={styles.Text1}>Within 1 Hour </Text>
      </View>
      <View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="eye-outline" size={20} color="#000"  style={styles.buttonEye}/>
            <Text style={styles.buttonText}>View Similar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="add-outline" size={20} color="#000" style={styles.buttonEye} />
            <Text style={styles.buttonText}>Add to Compare</Text>
          </TouchableOpacity>
        </View>
      </View>
        <Text style={styles.Text1}>Similar To</Text>
      <View style={styles.filterRow}>
          <Text style={styles.text}>282+ Items</Text>
          
          <View style={styles.iconContainer}>
            <TouchableOpacity
              onPress={() => {
                /* Handle sort action */
              }}
              style={styles.iconButton}
            >
              <View style={styles.iconBackground}>
                <Text style={styles.iconText}>Sort</Text>
                <Icon name="swap-vertical" size={20} color="#000" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                /* Handle filter action */
              }}
              style={styles.iconButton}
            >
              <View style={styles.iconBackground}>
                <Text style={styles.iconText}>Filter</Text>
                <Icon name="filter-outline" size={20} color="#000" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <SliderPage/>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container1: {
    marginTop: 10,
    width: "95%",
    height: "12%",
    borderRadius: 5,
    marginLeft: 10,
    backgroundColor: "#FFCCD5",
  },
  Text: {
    fontFamily: "outfit-SemiBold",
    marginLeft: 15,
    marginTop: 10,
    fontSize: 16,
  },
  Text1: {
    marginLeft: 15,
    marginTop: 2,
    fontSize: 25,
    fontFamily: "outfit-Bold",
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    width:180,
    height:50,
    borderRadius: 5,
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 14,
  },

  buttonEye: {
    marginLeft: 10,
    fontSize: 20,
  },

  filterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 10,
    marginBottom: 15,
  },
  text: {
    fontFamily: "outfit-SemiBold",
    fontSize: 18,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    marginLeft: 15,
  },
  iconBackground: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iconText: {
    marginRight: 5,
    fontSize: 16,
  },
});

export default ShopPageBottom;
