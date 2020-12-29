import React from 'react';
import styled from 'styled-components';
import {Text, View} from 'react-native';
import {COLORS} from '../../../styles/variables';
import Background from '../../../components/common/Background/Background';
import background2 from './../../../assets/backgrounds/kola8b.png';

const Ingredients = ({recipeLines, categories, diets}) => {
  return (
    <StyledView>
      <Header>Składniki</Header>
      <Background image={background2}>
        <IngredientList>
          {recipeLines.map((line) => (
            <IngredientItem key={line.id}>
              <Name>{line.ingredient.name}</Name>
              <Amount>
                {line.amount} x {line.unit.name}
              </Amount>
            </IngredientItem>
          ))}
        </IngredientList>
      </Background>
      <Header>Kategorie</Header>
      <Background image={background2}>
        <IngredientList>
          {categories.map((line) => (
            <IngredientItem key={line.id}>
              <Name>{line.name}</Name>
            </IngredientItem>
          ))}
        </IngredientList>
      </Background>
      <Header>Dieta</Header>
      <Background image={background2}>
        <IngredientList>
          {diets.map((line) => (
            <IngredientItem key={line.id}>
              <Name>{line.name}</Name>
            </IngredientItem>
          ))}
        </IngredientList>
      </Background>
    </StyledView>
  );
};

export default Ingredients;

const Header = styled(Text)`
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  color: black;
  padding: 5px;
  border: 1px solid ${COLORS.primary};
  background-color: white;
`;

const StyledView = styled(View)``;

const IngredientList = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 5px 10px;
`;

const IngredientItem = styled(View)`
  padding: 10px;
  width: 48%;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid ${COLORS.primary};
  border-radius: 10px;
`;

const Name = styled(Text)`
  text-align: center;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Amount = styled(Text)`
  text-align: center;
`;
