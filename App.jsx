import {SafeAreaView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStackNavigator from './src/navigations/AppStackNavigator';
import AppBar from './src/components/AppBar';
import 'react-native-get-random-values';

export default function App() {
  const [activePage, setActivePage] = React.useState('Gönderiler');

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <AppBar activePage={activePage} setActivePage={setActivePage} />

        <AppStackNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
