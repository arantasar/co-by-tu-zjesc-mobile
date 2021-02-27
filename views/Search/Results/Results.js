import React, {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import styled from 'styled-components';
import RecipeCard from '../../../components/common/RecipeCard/RecipeCard';
import Background from './../../../components/common/Background/Background';
import background from './../../../assets/backgrounds/kola8b.png';

export default function Results({route}) {
  const {recipes, size} = route.params;

  return (
    <StyledView>
      <Background image={background}>
        <ScrollView>
          {recipes.map((recipe) => (
            <RecipeCard recipe={recipe} size={size} key={recipe.id} />
          ))}
        </ScrollView>
      </Background>
    </StyledView>
  );
}

const StyledView = styled(View)`
  flex: 1;
`;
