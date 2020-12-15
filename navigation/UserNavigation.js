import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Panel from '../views/Panel/Panel';

const Stack = createStackNavigator();

const UserNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="panel"
      component={Panel}
      options={{title: 'Mój profil'}}
    />
  </Stack.Navigator>
);

export default UserNavigation;
