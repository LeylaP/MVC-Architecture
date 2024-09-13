import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const ListPostsView = ({postData}) => {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={postData}
        renderItem={({item}) => (
          <View style={styles.post}>
            <View style={styles.info}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.name}>{item.user}</Text>
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
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    color: 'gray',
    fontSize: 15,
    fontWeight: '800',
  },
  name: {
    color: 'gold',
    fontSize: 15,
    fontWeight: '800',
  },
});

export default ListPostsView;
