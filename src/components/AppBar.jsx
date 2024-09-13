import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomButton from './CustomButton/CustomButton';
import {buttonTypes} from './CustomButton/ButtonTypes';
import {useNavigation} from '@react-navigation/native';

const AppBar = ({activePage, setActivePage}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.appBarHeader}>Form Listesi</Text>
      {activePage === 'Gönderiler' ? (
        <CustomButton
          onPress={() => {
            setActivePage('Gönderi Ekle');
            navigation.navigate('AddPost');
          }}
          buttonTitle={'Gönderi Ekle'}
          buttonType={buttonTypes.PRYMARY_SMALL}
        />
      ) : (
        <CustomButton
          onPress={() => {
            setActivePage('Gönderiler');
            navigation.navigate('ListPosts');
          }}
          buttonTitle={'Gönderiler'}
          buttonType={buttonTypes.PRYMARY_SMALL}
        />
      )}
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
