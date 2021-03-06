import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styled from 'styled-components';
import Stats from './Stats/Stats';

const RecipeCard = ({recipe, size}) => {
  const nav = useNavigation();

  return (
    <StyledView
      onPress={() =>
        nav.navigate('recipe', {
          name: recipe.name,
          id: recipe.id,
          size,
        })
      }>
      <RecipeName>{recipe.name}</RecipeName>
      <RecipeDetails>
        <StyledImage
          source={{
            uri: recipe.photoPath,
          }}
        />
        <Stats {...recipe} />
      </RecipeDetails>
    </StyledView>
  );
};

export default RecipeCard;

const StyledView = styled(TouchableOpacity)`
  padding: 20px;
  margin: 5px 10px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.4);
`;

const RecipeName = styled(Text)`
  font-weight: bold;
`;

const RecipeDetails = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

const StyledImage = styled(Image)`
  width: 75px;
  height: 75px;
`;
