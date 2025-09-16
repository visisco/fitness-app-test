import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@screens/HomeScreen';
import BookScreen from '@screens/BookScreen';
import AboutScreen from '@screens/AboutScreen';
import TestimonialsScreen from '@screens/TestimonialsScreen';
import ContactScreen from '@screens/ContactScreen';
import CheckoutScreen from '@screens/CheckoutScreen';
import ConfirmationScreen from '@screens/ConfirmationScreen';

export type RootStackParamList = {
  MainTabs: undefined;
  Checkout: {
    service: string;
    minutes: number;
    price: number;
    datetime: string;
    checkoutUrl: string;
  };
  Confirmation: {
    service: string;
    minutes: number;
    price: number;
    datetime: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Book" component={BookScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
      <Tab.Screen name="Testimonials" component={TestimonialsScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
    </Tab.Navigator>
  );
}

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Checkout" component={CheckoutScreen} options={{ title: 'Checkout' }} />
      <Stack.Screen name="Confirmation" component={ConfirmationScreen} options={{ title: 'Confirmation' }} />
    </Stack.Navigator>
  );
}

