import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const ShopNav = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('HomePage')}>
        <Icon name="home-outline" size={25} color="#000" />
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Wishlist')}>
        <Icon name="heart-outline" size={25} color="#EB3030" />
        <Text style={styles.tex1t}>Wishlist</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cartTab} onPress={() => navigation.navigate('CheckoutPage')}>
        <View style={styles.cartIconContainer}>
          <Icon name="cart-outline" size={25} color="#fff" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Search')}>
        <Icon name="search-outline" size={25} color="#000" />
        <Text style={styles.text}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Settings')}>
        <Icon name="settings-outline" size={25} color="#000" />
        <Text style={styles.text}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  tab: {
    alignItems: 'center',
  },
  cartTab: {
    alignItems: 'center',
    marginTop: -20, // Adjust this value to position the cart button higher
  },
  cartIconContainer: {
    backgroundColor: '#EB3030',
    borderRadius: 30,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    elevation: 6, // for Android
    shadowColor: '#000', // for iOS
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  text: {
    fontSize: 12,
    marginTop: 2,
  },
  tex1t: {
    fontSize: 12,
    marginTop: 2,
    color:'#EB3030'
  },
});

export default ShopNav;