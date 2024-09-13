import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export const buttonTypes = {
  PRYMARY_SMALL: {
    backgroundColor: '#2D65E6',
    paddingHorizontal: 8,
    width: 120,
    height: 28,
    borderRadius: 8,
    color: '#FFFFFF',
    fontSize: 12,
    fontSize: '600',
    paddingVertica: 3,
  },
};

const CustomButton = ({buttonTitle, onPress, buttonType}) => {
  const styles = StyleSheet.create({
    buttonContainer: {
      backgroundColor: buttonType.backgroundColor,
      width: buttonType.width,
      height: buttonType.height,
      paddingHorizontal: buttonType.paddingHorizontal,
      paddingVertica: buttonTitle.paddingVertical,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: buttonType.borderRadius,
    },
    buttonTitle: {
      color: buttonType.color,
      fontSize: buttonType.fontSize,
      fontSize: buttonType.fontSize,
    },
  });

  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.buttonTitle}>Gönderi Ekle</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
