import React, {useContext} from 'react';
import UserNavigation from './UserNavigation';
import userContext from './../context/UserContext';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../views/Home/Home';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCalendarWeek,
  faUser,
  faPizzaSlice,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import LoginNavigation from './LoginNavigation';

const Tab = createBottomTabNavigator();

const screenOptions = ({route}) => ({
  tabBarIcon: ({focused, color, size}) => {
    let icon;
    switch (route.name) {
      case 'home':
        icon = faPizzaSlice;
        break;
      case 'profile':
      case 'login':
        icon = faUser;
        break;
      case 'search':
        icon = faSearch;
        break;
      case 'week':
        icon = faCalendarWeek;
        break;
    }

    return <FontAwesomeIcon icon={icon} />;
  },
});

const MainNavigation = () => {
  const ctx = useContext(userContext);

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="home" component={Home} options={{title: 'Odkrywaj'}} />
      <Tab.Screen name="search" component={Home} options={{title: 'Szukaj'}} />
      {ctx.isUserLogged ? (
        <Tab.Screen
          name="profile"
          component={UserNavigation}
          options={{title: 'Mój profil'}}
        />
      ) : (
        <Tab.Screen
          name="login"
          component={LoginNavigation}
          options={{title: 'Zaloguj'}}
        />
      )}
      <Tab.Screen
        name="week"
        component={Home}
        options={{title: 'Mój tydzień'}}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;
