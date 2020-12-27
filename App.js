import 'react-native-gesture-handler';
import React from 'react';
import styled from 'styled-components';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import UserContextProvider from './context/UserContextProvider';
import MainNavigation from './navigation/MainNavigation';

const App = () => (
  <NavigationContainer>
    <Application>
      <UserContextProvider>
        <MainNavigation />
      </UserContextProvider>
    </Application>
  </NavigationContainer>
);

export default App;

const Application = styled(SafeAreaView)`
  flex: 1;
`;
