import React from 'react';
import styled from 'styled-components';
import {ScrollView} from 'react-native';
import Hero from './../../components/Hero/Hero';
import RecentRecipes from './../../components/RecentRecipes/RecentRecipes';
import BestRecipes from './../../components/BestRecipes/BestRecipes';

const Home = () => (
  <StyledScrollView>
    <Hero />
    <RecentRecipes />
    <BestRecipes />
  </StyledScrollView>
);

export default Home;

const StyledScrollView = styled(ScrollView)`
  flex: 1;
`;
