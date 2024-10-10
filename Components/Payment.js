import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import ShopNav from "./ShopNav";

const VisaIcon = () => (
  <View style={[styles.cardIcon, { backgroundColor: "#1A1F71" }]}>
    <Text style={styles.cardIconText}>VISA</Text>
  </View>
);

const PayPalIcon = () => (
  <View style={[styles.cardIcon, { backgroundColor: "#003087" }]}>
    <Text style={styles.cardIconText}>PayPal</Text>
  </View>
);

const MastercardIcon = () => (
  <View style={styles.mastercardIcon}>
    <View style={[styles.mastercardCircle, { backgroundColor: "#EB001B" }]} />
    <View style={[styles.mastercardCircle, { backgroundColor: "#F79E1B" }]} />
  </View>
);

const SuccessAlert = ({ visible, onClose }) => {
  const navigation = useNavigation();

  const handleOkPress = () => {
    onClose(); // Close the modal
    navigation.navigate('PreviousOrdersPage'); // Navigate to PreviousOrdersPage
  };

  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styles.alertOverlay}>
        <View style={styles.alertContent}>
          <View style={styles.checkmarkCircle}>
            <Ionicons name="checkmark" size={40} color="white" />
          </View>
          <Text style={styles.alertTitle}>Payment done successfully.</Text>
          <TouchableOpacity onPress={handleOkPress} style={styles.alertButton}>
            <Text style={styles.alertButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const NewCardModal = ({ visible, onClose, onAddCard }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  

  const handleAddCard = () => {
    onAddCard({ cardNumber, cardHolder, expiryDate, cvv });
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Add New Card</Text>
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          value={cardNumber}
          onChangeText={setCardNumber}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Card Holder Name"
          value={cardHolder}
          onChangeText={setCardHolder}
        />
        <TextInput
          style={styles.input}
          placeholder="Expiry Date (MM/YY)"
          value={expiryDate}
          onChangeText={setExpiryDate}
        />
        <TextInput
          style={styles.input}
          placeholder="CVV"
          value={cvv}
          onChangeText={setCvv}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.addCardButton} onPress={handleAddCard}>
          <Text style={styles.addCardButtonText}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const Payment = () => {
    
  
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [selectedPayment, setSelectedPayment] = useState(0);
    const [showNewCardModal, setShowNewCardModal] = useState(false);
    const [paymentOptions, setPaymentOptions] = useState([
      { type: "visa", number: "2109" },
      { type: "paypal", number: "2109" },
      { type: "mastercard", number: "2109" },
    ]);
  
    const handleContinue = () => {
      setShowSuccessAlert(true);
    };
  
    const handleAddCard = (newCard) => {
      setPaymentOptions([...paymentOptions, { type: "visa", number: newCard.cardNumber.slice(-4) }]);
    };
  
    const renderPaymentIcon = (type) => {
      switch (type) {
        case "visa":
          return <VisaIcon />;
        case "paypal":
          return <PayPalIcon />;
        case "mastercard":
          return <MastercardIcon />;
        default:
          return null;
      }
    };
  
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.header}>
            <Ionicons name="chevron-back" size={24} color="black" />
            <Text style={styles.headerTitle}>Checkout</Text>
          </View>
  
          <View style={styles.orderSummary}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Order</Text>
              <Text style={styles.summaryValue}>₹ 7000</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Shipping</Text>
              <Text style={styles.summaryValue}>₹ 30</Text>
            </View>
            <View style={[styles.summaryRow, styles.totalRow]}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalValue}>₹ 7030</Text>
            </View>
          </View>
  
          <Text style={styles.sectionTitle}>Payment</Text>
  
          <View style={styles.paymentOptions}>
            {paymentOptions.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.paymentOption,
                  selectedPayment === index && styles.selectedOption,
                ]}
                onPress={() => setSelectedPayment(index)}
              >
                {renderPaymentIcon(option.type)}
                <Text style={styles.paymentText}>••••••••{option.number}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.paymentOption}
              onPress={() => setShowNewCardModal(true)}
            >
              <Ionicons
                name="add-circle-outline"
                size={24}
                color="#888"
                style={styles.paymentIcon}
              />
              <Text style={styles.paymentText}>Add new card</Text>
            </TouchableOpacity>
          </View>
  
          <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
  
          <SuccessAlert
            visible={showSuccessAlert}
            onClose={() => setShowSuccessAlert(false)}
          />
  
          <NewCardModal
            visible={showNewCardModal}
            onClose={() => setShowNewCardModal(false)}
            onAddCard={handleAddCard}
          />
        </ScrollView>
  
        <View style={styles.bottomNav}>
          <ShopNav />
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    scrollContainer: {
      padding: 20,
      flex: 1,
    },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: "outfit-Bold",
    marginLeft: 20,
    marginTop: 80,
  },
  orderSummary: {
    marginBottom: 20,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  summaryLabel: {
    color: "#888",
    fontFamily: "outfit-SemiBold",
    fontSize: 16,
  },
  summaryValue: {
    fontFamily: "outfit-SemiBold",
    fontSize: 16,
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingTop: 10,
  },
  totalLabel: {
    fontFamily: "outfit-SemiBold",
  },
  totalValue: {
    fontFamily: "outfit-SemiBold",
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: "outfit-SemiBold",
    marginBottom: 10,
  },
  paymentOptions: {
    marginBottom: 20,
  },
  paymentOption: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 20,
    backgroundColor: "#F4F4F4",
  },
  selectedOption: {
    borderColor: "#ff4d6d",
  },
  paymentIcon: {
    marginRight: 15,
  },
  paymentText: {
    color: "#888",
    fontFamily: "outfit-SemiBold",
  },
  continueButton: {
    backgroundColor: '#F83758',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  continueButtonText: {
    color: "#fff",
    fontSize: 25,
    fontFamily: "outfit-SemiBold",
    height: 30,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  cartIconContainer: {
    backgroundColor: "#ff4d6d",
    padding: 10,
    borderRadius: 20,
  },
  cardIcon: {
    width: 50,
    height: 30,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  cardIconText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  mastercardIcon: {
    width: 50,
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  mastercardCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginHorizontal: -5,
  },
  alertOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  alertContent: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    elevation: 5,
    width: '90%',
    height: 190
  },
  checkmarkCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FF4D6D",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  alertTitle: {
    fontSize: 18,
    fontFamily: "outfit-SemiBold",
    textAlign: "center",
    marginBottom: 20,
  },
  alertButton: {
    backgroundColor: "#FF4D6D",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  alertButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
  },
  modalTitle: {
    fontSize: 24,
    fontFamily: "outfit-Bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontFamily: "outfit-Regular",
  },
  addCardButton: {
    backgroundColor: "#ff4d6d",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  addCardButtonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "outfit-SemiBold",
  },
  closeButton: {
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
    borderWidth: 1,
    borderColor: "#ff4d6d",
  },
  closeButtonText: {
    color: "#ff4d6d",
    fontSize: 16,
    fontFamily: "outfit-SemiBold",
  },
});

export default Payment;