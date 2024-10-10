import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

const PreviousOrdersPage = () => {
  const navigation = useNavigation();

  // Mock data for previous orders
  const previousOrders = [
    {
      id: 1,
      orderNumber: "ORD123456",
      date: "2024-10-05",
      totalAmount: 129.99,
      status: "Delivered",
      items: [
        {
          id: 1,
          title: "Wireless Headphones",
          price: 79.99,
          quantity: 1,
          image: "https://placeholder.com/headphones.jpg",
        },
        {
          id: 2,
          title: "Phone Case",
          price: 25.00,
          quantity: 2,
          image: "https://placeholder.com/phonecase.jpg",
        },
      ],
    },
    {
      id: 2,
      orderNumber: "ORD123457",
      date: "2024-09-28",
      totalAmount: 199.99,
      status: "Delivered",
      items: [
        {
          id: 3,
          title: "Smart Watch",
          price: 199.99,
          quantity: 1,
          image: "https://placeholder.com/smartwatch.jpg",
        },
      ],
    },
  ];

  const renderOrderItem = ({ item }) => (
    <View style={styles.orderCard}>
      <View style={styles.orderHeader}>
        <View>
          <Text style={styles.orderNumber}>Order #{item.orderNumber}</Text>
          <Text style={styles.orderDate}>{item.date}</Text>
        </View>
        <View>
          <Text style={styles.orderStatus}>{item.status}</Text>
          <Text style={styles.orderTotal}>${item.totalAmount.toFixed(2)}</Text>
        </View>
      </View>
      
      <FlatList
        data={item.items}
        renderItem={({ item: orderItem }) => (
          <View style={styles.orderItemContainer}>
            <Image source={{ uri: orderItem.image }} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemTitle}>{orderItem.title}</Text>
              <Text>Quantity: {orderItem.quantity}</Text>
              <Text>${orderItem.price.toFixed(2)}</Text>
            </View>
          </View>
        )}
        keyExtractor={(orderItem) => orderItem.id.toString()}
      />
      
      <TouchableOpacity 
        style={styles.reorderButton}
        onPress={() => {
          // Handle reorder logic here
          navigation.navigate('Shop', { reorderItems: item.items });
        }}
      >
        <Text style={styles.reorderButtonText}>Reorder</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Previous Orders</Text>
      <FlatList
        data={previousOrders}
        renderItem={renderOrderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.ordersList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  ordersList: {
    padding: 15,
  },
  orderCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  orderHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 10,
  },
  orderNumber: {
    fontSize: 16,
    fontWeight: "bold",
  },
  orderDate: {
    color: "#888",
  },
  orderStatus: {
    color: "#4CAF50",
    fontWeight: "bold",
  },
  orderTotal: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "right",
  },
  orderItemContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontWeight: "500",
  },
  reorderButton: {
    backgroundColor: '#F83758',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  reorderButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default PreviousOrdersPage;