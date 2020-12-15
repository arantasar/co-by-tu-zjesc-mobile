import React, {useContext} from 'react';
import UserNavigation from './UserNavigation';
import userContext from './../context/UserContext';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../views/Home/Home';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import LoginNavigation from './LoginNavigation';

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

const MainNavigation = () => {
  const ctx = useContext(userContext);

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="home" component={Home} options={{title: 'Odkrywaj'}} />
      <Tab.Screen name="Szukaj" component={Home} />
      {ctx.isUserLogged ? (
        <Tab.Screen name="Mój profil" component={UserNavigation} />
      ) : (
        <Tab.Screen name="Zaloguj" component={LoginNavigation} />
      )}
      <Tab.Screen name="Mój tydzień" component={Home} />
    </Tab.Navigator>
  );
};

export default MainNavigation;
