import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, Modal } from 'react-native';
import BottomNavigation from './components/BottomNavigation';



export default function App() {
  let [topText, setTopText] = useState('Home')



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.header__icon} source={require('./images_icons/User 24px.svg')} />
        <Text style={{ color: 'white', fontSize: 26, }}>{topText}</Text>
        <Image style={styles.header__icon} source={require('./images_icons/Search 24px.svg')} />
      </View>
      <BottomNavigation setTopText={setTopText} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1F3C',
  },
  header: {
    height: 92,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 60,
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: 'center'
  },
  header__icon: {
    width: 24,
    height: 24,
  }

});
