import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ListPostsController from '../screens/ListPosts/ListPostsController';
import AddPostController from '../screens/AddPost/AddPostController';

const AppStackNavigator = () => {
  const AppStack = createNativeStackNavigator();

  return (
    <AppStack.Navigator initialRouteName="AddPost">
      <AppStack.Screen
        name="AddPost"
        component={AddPostController}
        options={{headerShown: false}}
      />
      <AppStack.Screen
        name="ListPosts"
        component={ListPostsController}
        options={{headerShown: false}}
      />
    </AppStack.Navigator>
  );
};

export default AppStackNavigator;

// stack navigatorumuzda screens ların içine controller'imizi vericez
