import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ListPostsController from '../screens/ListPosts/ListPostsController';

const AppStackNavigator = () => {
  const AppStack = createNativeStackNavigator();

  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="ListPostsScreen"
        component={ListPostsController}
        options={{headerShown: false}}
      />
    </AppStack.Navigator>
  );
};

export default AppStackNavigator;

// stack navigatorumuzda screens ların içine controller'imizi vericez
