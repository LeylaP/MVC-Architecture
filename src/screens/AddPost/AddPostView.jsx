import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import {buttonTypes} from '../../components/CustomButton/ButtonTypes';

const AddPostView = ({onInputChange, handleSubmit, form}) => {
  return (
    <View style={styles.form}>
      <Text style={styles.formTitle}>Yeni Gönderi Ekle</Text>
      <View style={styles.inputGrub}>
        <Text style={styles.label}>Kullanıcı adı</Text>
        <TextInput
          value={form.user}
          onChangeText={text => onInputChange('user', text)}
          style={styles.input}
          placeholderTextColor={'gray'}
          placeholder="Kullanıcı adı giriniz"
        />
      </View>
      <View style={styles.inputGrub}>
        <Text style={styles.label}>Başlık</Text>
        <TextInput
          value={form.title}
          onChangeText={text => onInputChange('title', text)}
          style={styles.input}
          placeholderTextColor={'gray'}
          placeholder="Başlık giriniz"
        />
      </View>
      <View style={styles.inputGrub}>
        <Text style={styles.label}>Açıklama</Text>
        <TextInput
          value={form.text}
          onChangeText={text => onInputChange('text', text)}
          style={styles.input}
          placeholderTextColor={'gray'}
          placeholder="Açıklama giriniz"
        />
      </View>
      <CustomButton
        onPress={() => handleSubmit}
        buttonTitle={'Gönder'}
        buttonType={buttonTypes.PRYMARY_SMALL}
      />
    </View>
  );
};

export default AddPostView;

const styles = StyleSheet.create({
  inputGrub: {
    gap: 10,
  },

  form: {
    backgroundColor: 'black',
    gap: 40,
    marginHorizontal: 50,
    marginVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  formTitle: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
  },
  label: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#FEF9A7',
    borderRadius: 10,
    fontSize: 15,
  },
});
