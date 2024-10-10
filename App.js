import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./Components/WelcomeScreen";
import SplashScreen from "./Components/SplashScreen";
import Login from "./Components/Login";
import Signin from "./Components/Sign-in";
import ForgetPassword from "./Components/ForgetPassword";
import GetStarted from "./Components/GetStarted";
import HomePage from "./Components/HomePage";
import Trending from "./Components/Trending";
import Offer from "./Components/Offer";
import Shoppage from "./Components/Shoppage"; 
import ShopPageBottom from "./Components/ShopPageBottom"; 
import CheckoutPage from "./Components/CheckoutPage"; 
import Checkout from "./Components/Checkout"; 
import BottomNav from "./Components/BottomNav";
import ShoppingBag from "./Components/ShoppingBag";
import Payment from "./Components/Payment";
import PreviousOrdersPage from "./Components/Orderdetails";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    outfit: require("./assets/fonts/Montserrat-Italic-VariableFont_wght.ttf"),
    "outfit-Medium": require("./assets/fonts/Montserrat-VariableFont_wght.ttf"),
    "outfit-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "outfit-ExtraBold": require("./assets/fonts/Montserrat-ExtraBold.ttf"),
    "outfit-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "outfit-Regular": require("./assets/fonts/Montserrat-Regular.ttf")
  });

  if (!fontsLoaded) {
    return null; // Or a loading indicator
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signin"
            component={Signin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ForgetPassword"
            component={ForgetPassword}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="GetStarted"
            component={GetStarted}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomePage"
            component={HomePage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Trending"
            component={Trending}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Offer" // Add Offer to the stack
            component={Offer}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Shoppage" // Add Offer to the stack
            component={Shoppage}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="BottomNav" // Add Offer to the stack
            component={BottomNav}
            options={{ headerShown: false }}
          />
            <Stack.Screen
            name="ShopPageBottom" // Add Offer to the stack
            component={ShopPageBottom}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CheckoutPage" // Add Offer to the stack
            component={CheckoutPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Checkout" // Add Offer to the stack
            component={Checkout}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ShoppingBag" // Add Offer to the stack
            component={ShoppingBag}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Payment" // Add Offer to the stack
            component={Payment}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PreviousOrdersPage" // Add Offer to the stack
            component={PreviousOrdersPage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
