import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const ProfileSection = () => {
  return (
    <View style={styles.profileSection}>
          <Text style={styles.title}>Checkout</Text>
      <View style={styles.profileImageContainer}>
        <Image
          source={require("../assets/Images/iconimg.png")}
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.editProfileButton}>
          <Ionicons name="pencil" size={20} color="white" />
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

const CheckoutPage = () => {
    const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Back Arrow */}
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" onPress={() => navigation.navigate('Shoppage')}  />
        </TouchableOpacity>

        {/* Profile Section */}
        <ProfileSection />

        {/* Personal Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Details</Text>

          <Text style={styles.label}>Email Address</Text>
          <TextInput style={styles.input} placeholder="Email Address" />

          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} placeholder="Password" secureTextEntry />

          <TouchableOpacity>
            <Text style={styles.changePassword}>Change Password</Text>
          </TouchableOpacity>
        </View>

        {/* Business Address Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Business Address Details</Text>

          <Text style={styles.label}>Pincode</Text>
          <TextInput style={styles.input} placeholder="Pincode" />

          <Text style={styles.label}>Address</Text>
          <TextInput style={styles.input} placeholder="Address" />

          <Text style={styles.label}>City</Text>
          <TextInput style={styles.input} placeholder="City" />

          <Text style={styles.label}>State</Text>
          <TextInput style={styles.input} placeholder="State" />

          <Text style={styles.label}>Country</Text>
          <TextInput style={styles.input} placeholder="Country" />
        </View>

        {/* Bank Account Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Bank Account Details</Text>

          <Text style={styles.label}>Bank Account Number</Text>
          <TextInput style={styles.input} placeholder="Bank Account Number" />

          <Text style={styles.label}>Account Holder's Name</Text>
          <TextInput style={styles.input} placeholder="Account Holder's Name" />

          <Text style={styles.label}>IFSC Code</Text>
          <TextInput style={styles.input} placeholder="IFSC Code" />
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} onPress={() => navigation.navigate('Payment')}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  profileSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editProfileButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: 'skyblue',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: "outfit-Bold",
    marginBottom:15,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: "outfit-Bold",
    marginBottom: 25,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    fontFamily: "outfit-SemiBold",
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 25,
  },
  changePassword: {
    color: '#F83758',
    textDecorationLine: 'underline',
    alignItems:'flex-end',
    marginLeft:250,
    marginBottom: 15,
  },
  saveButton: {
    backgroundColor: '#F83758',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CheckoutPage;