import React from 'react';
import styled from 'styled-components';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import Date from './Date/Date';
import Stats from './Stats/Stats';
import {useNavigation} from '@react-navigation/native';

const RecipePreview = ({
  id,
  name,
  dateAdded,
  user,
  inFavourite,
  likes,
  viewCounter,
}) => {
  const nav = useNavigation();

  return (
    <StyledRecipePreview onPress={() => nav.navigate('recipe', {name, id})}>
      <StyledImage source={{uri: 'https://picsum.photos/200'}} />
      <Date date={dateAdded || ''} />
      <Author>{user && user.name}</Author>
      <StyledText>{name}</StyledText>
      <Stats
        likes={likes}
        inFavourite={inFavourite}
        viewCounter={viewCounter}
      />
    </StyledRecipePreview>
  );
};

export default RecipePreview;

const StyledRecipePreview = styled(TouchableOpacity)`
  border: 1px solid lightgray;
  border-radius: 10px;
  margin-right: 20px;
`;

const Author = styled(Text)`
  padding: 0 10px;
`;

const StyledText = styled(Text)`
  font-weight: bold;
  font-size: 16px;
  padding: 5px 10px;
`;

const StyledImage = styled(Image)`
  width: 200px;
  height: 200px;
  border-radius: 10px;
`;
