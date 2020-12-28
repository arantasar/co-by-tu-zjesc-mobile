import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../views/Home/Home';
import CommonNavigation from './CommonNavigation';

const Stack = createStackNavigator();

const HomeNavigation = () => {
  const common = CommonNavigation(Stack);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{title: 'Odkrywaj', headerShown: false}}
      />
      {common}
    </Stack.Navigator>
  );
};

export default HomeNavigation;
