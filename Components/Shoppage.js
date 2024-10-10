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

const Shoppage = ({ route }) => {
  const { cart, setCart } = route.params;
  const navigation = useNavigation();

  const updateQuantity = (item, action) => {
    if (action === "increase") {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else if (action === "decrease") {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === item.id && cartItem.quantity > 1
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const renderCartItem = ({ item }) => (
    <View style={styles.productSection}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
        <Text>Quantity: {item.quantity}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => updateQuantity(item, "decrease")}>
            <Text style={styles.quantityButton}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => updateQuantity(item, "increase")}>
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.removeButton}>
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  const ListHeaderComponent = () => (
    <Text style={styles.title}>Your Cart</Text>
  );

  const ListFooterComponent = () => (
    <View style={styles.totalSection}>
      <Text style={styles.totalPrice}>Total: ${totalAmount}</Text>
      <TouchableOpacity 
        style={styles.paymentButton} 
        onPress={() => navigation.navigate('CheckoutPage', { cart })} // Pass cart data
      >
        <Text style={styles.paymentButtonText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </View>
  );

  return ( 
    <FlatList
      style={styles.container}
      data={cart}
      renderItem={renderCartItem}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={ListFooterComponent}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#f9f9f9",
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
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
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 15,
  },
  productDetails: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 14,
    color: "#888",
  },
  totalSection: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 10,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "right",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  quantityButton: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F83758",
    color: "#fff",
    borderRadius: 5,
    textAlign: "center",
    marginHorizontal: 5,
  },
  removeButton: {
    marginTop: 5,
  },
  removeButtonText: {
    color: "red",
  },
  paymentButton: {
    backgroundColor: '#F83758',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  paymentButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Shoppage;
