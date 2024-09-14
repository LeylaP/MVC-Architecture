import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import AddPostView from './AddPostView';
import AddPostModel from './AddPostModel';
import {useNavigation} from '@react-navigation/native';

const AddPostController = () => {
  const navigation = useNavigation();

  const formModel = new AddPostModel();
  // console.log(formModel);

  const [form, setForm] = useState(formModel.state);

  console.log(form);

  const onInputChange = (key, value) => {
    setForm({...form, [key]: value});
  };

  const handleSubmit = () => {
    if (!form.user || !form.title || !form.text) {
      console.log('doludur');
      return;
    }

    axios
      .post('http://localhost:3000/posts', form)
      .then(() => {
        setForm({
          title: '',
          text: '',
          user: '',
        });
        navigation.navigate('ListPosts');
      })
      .catch(error => console.log(error));
  };

  return (
    <View>
      <AddPostView
        onInputChange={onInputChange}
        handleSubmit={handleSubmit}
        form={form}
      />
    </View>
  );
};

export default AddPostController;

const styles = StyleSheet.create({});
