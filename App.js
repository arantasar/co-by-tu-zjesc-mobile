import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import styled from 'styled-components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import UserContextProvider from './context/UserContextProvider';
import userContext from './context/UserContext';

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

const App = () => {
  const ctx = useContext(userContext);

  return (
    <NavigationContainer>
      <Application>
        <UserContextProvider>
          <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Odkrywaj" component={Home} />
            <Tab.Screen name="Szukaj" component={Home} />
            {ctx.isUserLogged ? (
              <Tab.Screen name="Mój profil" component={Home} />
            ) : (
              <Tab.Screen name="Zaloguj" component={Login} />
            )}
            <Tab.Screen name="Mój tydzień" component={Home} />
          </Tab.Navigator>
        </UserContextProvider>
      </Application>
    </NavigationContainer>
  );
};

export default App;

const Application = styled(SafeAreaView)`
  flex: 1;
`;
