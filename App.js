import 'react-native-gesture-handler';
import React from 'react';
import styled from 'styled-components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Home from './views/Home/Home';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();

const screenOptions = ({route}) => ({
  tabBarIcon: ({focused, color, size}) => {
    let icon;
    switch (route.name) {
      case 'Odkrywaj':
        icon = 'faCoffee';
        break;
    }

    return <FontAwesomeIcon icon={faCoffee} />;
  },
});

const App = () => (
  <NavigationContainer>
    <Application>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Odkrywaj" component={Home} />
        <Tab.Screen name="Szukaj" component={Home} />
        <Tab.Screen name="Moje przepisy" component={Home} />
        <Tab.Screen name="Mój tydzień" component={Home} />
      </Tab.Navigator>
    </Application>
  </NavigationContainer>
);

export default App;

const Application = styled(SafeAreaView)`
  flex: 1;
`;
