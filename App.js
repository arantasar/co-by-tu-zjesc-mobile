import React from 'react';
import styled from 'styled-components';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import Hero from './components/Hero/Hero';
import RecentRecipes from './components/RecentRecipes/RecentRecipes';

const App = () => (
  <Application>
    <StyledScrollView>
      <Hero />
      <RecentRecipes />
      <Text>Najpopularniejsze przepisy</Text>
    </StyledScrollView>
    <Text>Bottom nav</Text>
  </Application>
);

export default App;

const StyledScrollView = styled(ScrollView)`
  flex: 1;
`;

const Application = styled(SafeAreaView)`
  flex: 1;
`;
