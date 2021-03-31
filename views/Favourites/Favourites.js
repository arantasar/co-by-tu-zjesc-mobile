import React, {useContext, useState} from 'react';
import {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {errorHandler} from '../../common/errorHandler';
import RecipeCard from '../../components/common/RecipeCard/RecipeCard';
import Background from './../../components/common/Background/Background';
import userContext from '../../context/UserContext';
import background from './../../assets/backgrounds/kola8b.png';
import styled from 'styled-components';

const Favourites = () => {
  const {user} = useContext(userContext);

  return (
    <StyledView>
      <Background image={background}>
        <ScrollView>
          {user.favourites.map((recipe) => (
            <RecipeCard recipe={recipe} key={recipe.id} />
          ))}
        </ScrollView>
      </Background>
    </StyledView>
  );
};

export default Favourites;

const StyledView = styled(View)`
  flex: 1;
`;
