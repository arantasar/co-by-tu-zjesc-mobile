import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './../views/Login/Login';
import Register from './../views/Register/Register';

const Stack = createStackNavigator();

const LoginNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="login"
      component={Login}
      options={{title: 'Logowanie'}}
    />
    <Stack.Screen
      name="register"
      component={Register}
      options={{title: 'Rejestracja'}}
    />
  </Stack.Navigator>
);

export default LoginNavigation;
