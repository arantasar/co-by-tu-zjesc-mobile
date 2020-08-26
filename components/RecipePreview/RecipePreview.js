import React from 'react';
import styled from 'styled-components';
import {Text, Image, View} from 'react-native';

const RecipePreview = ({name}) => (
  <StyledRecipePreview>
    <StyledImage source={{uri: 'https://via.placeholder.com/200'}} />
    <StyledText>{name}</StyledText>
  </StyledRecipePreview>
);

export default RecipePreview;

const StyledRecipePreview = styled(View)`
  border: 1px solid lightgray;
  border-radius: 10px;
  margin-right: 20px;
`;

const StyledText = styled(Text)`
  font-weight: bold;
  font-size: 16px;
  padding: 10px;
`;

const StyledImage = styled(Image)`
  width: 200px;
  height: 200px;
  border-radius: 10px;
`;
