import React, {useContext} from 'react';
import UserNavigation from './UserNavigation';
import userContext from './../context/UserContext';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCalendarWeek,
  faUser,
  faPizzaSlice,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import LoginNavigation from './LoginNavigation';
import HomeNavigation from './HomeNavigation';
import {COLORS} from '../styles/variables';
import MyWeek from '../views/MyWeek/MyWeek';
import SearchNavigation from './SearchNavigation';

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  activeTintColor: COLORS.primary,
};

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

    return (
      <FontAwesomeIcon icon={icon} color={focused ? COLORS.primary : 'black'} />
    );
  },
});

const MainNavigation = () => {
  const ctx = useContext(userContext);

  return (
    <Tab.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
      <Tab.Screen
        name="home"
        component={HomeNavigation}
        options={{title: 'Odkrywaj'}}
      />
      <Tab.Screen
        name="search"
        component={SearchNavigation}
        options={{title: 'Szukaj'}}
      />
      {ctx.isUserLogged ? (
        [
          <Tab.Screen
            name="profile"
            key={'profile'}
            component={UserNavigation}
            options={{title: 'Mój profil'}}
          />,
          <Tab.Screen
            name="week"
            key={'week'}
            component={MyWeek}
            options={{title: 'Mój tydzień'}}
          />,
        ]
      ) : (
        <Tab.Screen
          name="login"
          component={LoginNavigation}
          options={{title: 'Zaloguj'}}
        />
      )}
    </Tab.Navigator>
  );
};

export default MainNavigation;
