import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import * as Linking from 'expo-linking';
import { useRoute, useNavigation } from '@react-navigation/native';
import { DEEP_LINK_SUCCESS, DEEP_LINK_CANCEL } from '@config/payments';

type CheckoutParams = {
  service: string;
  minutes: number;
  price: number;
  datetime: string; // ISO
  checkoutUrl: string;
};

export default function CheckoutScreen() {
  const route = useRoute();
  const navigation = useNavigation<any>();
  const { service, minutes, price, datetime, checkoutUrl } = route.params as unknown as CheckoutParams;

  useEffect(() => {
    const subscription = Linking.addEventListener('url', (event) => {
      const url = event.url;
      if (url.startsWith(DEEP_LINK_SUCCESS)) {
        navigation.navigate('Confirmation', { service, minutes, price, datetime });
      } else if (url.startsWith(DEEP_LINK_CANCEL)) {
        navigation.goBack();
      }
    });
    return () => subscription.remove();
  }, [navigation, service, minutes, price, datetime]);

  const injectedJS = `
    (function() {
      // Coinbase Commerce will redirect to our app scheme after payment
    })();
  `;

  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: checkoutUrl }}
        startInLoadingState
        injectedJavaScript={injectedJS}
        renderLoading={() => (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator />
          </View>
        )}
      />
    </View>
  );
}

