import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomButton, {buttonTypes} from './CustomButton';

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.appBarHeader}>AppBar Component</Text>
      <CustomButton
        buttonTitle={'Gönderi Ekle'}
        buttonType={buttonTypes.PRYMARY_SMALL}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 20,
    gap: 20,
  },
  appBarHeader: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 20,
  },
});

export default AppBar;
