import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import CarList from './components/CarList';
import {AdMobBanner} from 'expo-ads-admob';

export default function App() {
  return (
    <View style={styles.container}>
      <CarList />
      <StatusBar style="auto" />
      <AdMobBanner
        style={styles.ads}
        bannerSize="fullBanner"
        adUnitID={__DEV__ ? "ca-app-pub-3940256099942544/6300978111" : 'ca-app-pub-5887140094262719/8282226226'} // Test ID, Replace with your-admob-unit-id
        servePersonalizedAds // true or false
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ads: {
    position: 'absolute',
    bottom: 0
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
