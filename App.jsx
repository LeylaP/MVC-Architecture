import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStackNavigator from './src/navigations/AppStackNavigator';
import AppBar from './src/components/AppBar';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AppBar />
      <NavigationContainer>
        <AppStackNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
