import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Title from '../../components/Title/Title';
import {titleTypes} from '../../components/Title/TitleTypes';

const ListPostsView = ({postData}) => {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={postData}
        renderItem={({item}) => (
          <View style={styles.post}>
            <View style={styles.info}>
              <Title
                titleType={titleTypes.TITLE_WHİTE_20_800}
                title={item.title}
              />
              <Title
                title={item.user}
                titleType={titleTypes.TITLE_GOLD_15_800}
              />
            </View>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  post: {
    backgroundColor: 'black',
    gap: 20,
    margin: 5,
    padding: 20,
    borderRadius: 8,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: '#FFFFFF',
    alignItems: 'center',
  },

  text: {
    color: 'gray',
    fontSize: 15,
    fontWeight: '800',
  },
});

export default ListPostsView;
