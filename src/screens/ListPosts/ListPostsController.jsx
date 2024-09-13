import React from 'react';
import ListPostsView from './ListPostsView';
import {Text} from 'react-native';

const ListPostsController = () => {
  return (
    <>
      <Text>bu bizim ekrana yazılacak olan componentimizdir</Text>
      <ListPostsView />
    </>
  );
};

export default ListPostsController;
