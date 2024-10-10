import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  FlatList,
  StatusBar,
  Modal,
  SafeAreaView,
} from "react-native";
import { Rating } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import HamburgerIcon from "../Components/Screen/Icon/HamburgerIcon";
import BottomNav from "./BottomNav";
import { useNavigation } from '@react-navigation/native';

const Trending = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const navigation = useNavigation();
  const [cartModalVisible, setCartModalVisible] = useState(false);

  const handleMenuPress = () => {
    // Handle opening the side navigation bar
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.cartItemImage} />
      <View style={styles.cartItemDetails}>
        <Text style={styles.cartItemTitle}>{item.title}</Text>
        <Text style={styles.cartItemPrice}>${item.price}</Text>
        <Text>Quantity: {item.quantity}</Text>
      </View>
    </View>
  );

  const renderCartModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={cartModalVisible}
      onRequestClose={() => setCartModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setCartModalVisible(false)}
          >
            <Icon name="close" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Your Cart</Text>
          <FlatList
            data={cart}
            renderItem={renderCartItem}
            keyExtractor={(item) => item.id.toString()}
          />
          <Text style={styles.totalPrice}>
            Total: ${cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
          </Text>
        </View>
      </View>
    </Modal>
  );

  const handleCartPress = () => {
    navigation.navigate('Shoppage', { cart, setCart });
  };

  const renderProductItem = ({ item }) => (
    <View style={styles.productCardWrapper}>
      <TouchableOpacity
        style={styles.productCard}
        onPress={() => addToCart(item)}
      >
        <Image
          source={{ uri: item.image }}
          style={styles.productImage}
        />
        <Text style={styles.productTitle} numberOfLines={1}>{item.title}</Text>
        <Text style={styles.productDescription} numberOfLines={2}>
          {item.description}
        </Text>
        <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
        <View style={styles.ratingContainer}>
          <Rating
            style={styles.rating}
            startingValue={item.rating.rate}
            imageSize={16}
            readonly
          />
          <Text style={styles.ratingCount}>({item.rating.count})</Text>
        </View>
        <Text style={styles.addToCartText}>Tap to add to cart</Text>
      </TouchableOpacity>
    </View>
  );

  const ListHeaderComponent = () => (
    <View style={styles.headerWrapper}>
      <View style={styles.headerContainer}>
        <HamburgerIcon onPress={handleMenuPress} color="#000" size={30} />
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/Images/logoipsum-255 1.png")}
            style={styles.logo}
          />
        </View>
        <TouchableOpacity style={styles.cartButton} onPress={handleCartPress}>
          <Icon name="cart" size={24} color="#000" />
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>{cart.reduce((sum, item) => sum + item.quantity, 0)}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Icon
          name="search"
          size={20}
          color="#999"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search any Product"
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.filterRow}>
        <Text style={styles.text}>All Featured</Text>
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
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="#fff" />
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        ListHeaderComponent={ListHeaderComponent}
        contentContainerStyle={styles.productContainer}
        columnWrapperStyle={styles.columnWrapper}
      />
      {renderCartModal()}
      <BottomNav />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    marginTop: 30,
  },
  headerWrapper: {
    backgroundColor: "#fff",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 44,
  },
  cartButton: {
    padding: 8,
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: 'white',
    fontSize: 12,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    height: 40,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingLeft: 5,
  },
  filterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 10,
  },
  text: {
    fontWeight: "600",
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
    fontFamily: "outfit-SemiBold",
  },
  productContainer: {
    paddingHorizontal: 8,
    paddingTop: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  productCardWrapper: {
    width: '48%',
    marginBottom: 16,
  },
  productCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  productImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  productTitle: {
    fontSize: 16,
    fontFamily: "outfit-Bold",
    marginTop: 5,
  },
  productDescription: {
    fontSize: 13,
    color: "#555",
    marginTop: 5,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  rating: {
    marginRight: 5,
  },
  ratingCount: {
    fontSize: 12,
    color: "#444",
  },
  addToCartText: {
    textAlign: 'center',
    color: '#F83758',
    marginTop: 5,
    fontFamily: "outfit-SemiBold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "90%",
    maxHeight: "80%",
  },
  closeButton: {
    alignSelf: "flex-end",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cartItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  cartItemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  cartItemDetails: {
    flex: 1,
  },
  cartItemTitle: {
    fontSize: 16,
    fontFamily: "outfit-Bold",
  },
  cartItemPrice: {
    fontSize: 14,
    color: '#888',
    fontFamily: "outfit-SemiBold",
  },
  totalPrice: {
    fontSize: 18,
    fontFamily: "outfit-SemiBold",
    marginTop: 10,
    textAlign: 'right',
  },
});

export default Trending;