import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

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
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonTitle}>Gönderi Ekle</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
