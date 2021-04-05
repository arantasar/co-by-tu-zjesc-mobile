import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import styled from 'styled-components';
import {COLORS} from './../../../styles/variables';

const Ingredient = ({ingredient, isSelected, toggleSelected}) => {
  return (
    <StyledIngredient
      onPress={() => {
        toggleSelected(ingredient);
      }}
      selected={isSelected}>
      <Content>
        <Photo source={{uri: ingredient.photoPath}} />
        <IngredientName>{ingredient.name}</IngredientName>
      </Content>
    </StyledIngredient>
  );
};

export default Ingredient;

const Content = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const StyledIngredient = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  margin: 5px 5px 0 5px;
  border-radius: 15px;
  border: ${(props) =>
    props.selected ? '1px solid ' + COLORS.primary : '1px solid white'};
`;

const IngredientName = styled(Text)`
  font-size: 18px;
`;

const Photo = styled(Image)`
  width: 75px;
  height: 75px;
  margin-right: 50px;
  margin: 10px;
`;

const Details = styled(View)`
  width: 60px;
`;

const DetailsText = styled(Text)`
  margin-bottom: 2px;
`;

const Icon = styled(View)`
  padding: 35px 25px;
  background-color: ${COLORS.primary};
  height: 100%;
  width: 40px;
  align-items: center;
  border-radius: 15px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;
