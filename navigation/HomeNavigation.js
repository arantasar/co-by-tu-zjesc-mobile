import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../views/Home/Home';
import Recipe from '../views/Recipe/Recipe';

const Stack = createStackNavigator();

const HomeNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="home"
      component={Home}
      options={{title: 'Odkrywaj', headerShown: false}}
    />
  </Stack.Navigator>
);

export default HomeNavigation;
