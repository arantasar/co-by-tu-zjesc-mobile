import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, Image, TouchableOpacity} from 'react-native';
import useRecipe from './../../hooks/useRecipe';
import styled from 'styled-components';
import {COLORS} from '../../styles/variables';
import Background from '../../components/common/Background/Background';
import background2 from './../../assets/backgrounds/kola8b.png';

const Shopping = ({route}) => {
  const {id, size} = route.params;
  const {recipe, setRecipe} = useRecipe(id, size);
  const [excluded, setExcluded] = useState([]);

  const exclude = (id) => {
    setExcluded((prev) => [...prev, id]);
  };

  const include = (id) => {
    setExcluded((prev) => prev.filter((line) => line !== id));
  };

  return (
    <StyledView>
      <Background image={background2}>
        <IngredientList>
          {recipe &&
            recipe.recipeLines
              .filter((line) => !excluded.includes(line.id))
              .map((line) => (
                <IngredientItem key={line.id} onPress={() => exclude(line.id)}>
                  <Photo source={{uri: 'https://picsum.photos/50'}} />
                  <Name>{line.ingredient.name}</Name>
                  <Amount>
                    {line.amount} x {line.unit.name}
                  </Amount>
                </IngredientItem>
              ))}
        </IngredientList>
        <IngredientList>
          {recipe &&
            recipe.recipeLines
              .filter((line) => excluded.includes(line.id))
              .map((line) => (
                <ExcludedIngredientItem
                  key={line.id}
                  onPress={() => include(line.id)}>
                  <Photo source={{uri: 'https://picsum.photos/50'}} />
                  <Name>{line.ingredient.name}</Name>
                  <Amount>
                    {line.amount} x {line.unit.name}
                  </Amount>
                </ExcludedIngredientItem>
              ))}
        </IngredientList>
      </Background>
    </StyledView>
  );
};

export default Shopping;

const StyledView = styled(ScrollView)`
  flex: 1;
`;

const IngredientList = styled(View)`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 5px;
`;

const IngredientItem = styled(TouchableOpacity)`
  width: 100%;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid ${COLORS.primary};
  border-radius: 10px;
  margin: 5px 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ExcludedIngredientItem = styled(TouchableOpacity)`
  width: 100%;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid ${COLORS.primary};
  border-radius: 10px;
  margin: 5px 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  opacity: 0.5;
`;

const Photo = styled(Image)`
  width: 50px;
  height: 50px;
`;

const Name = styled(Text)`
  text-align: center;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Amount = styled(Text)`
  text-align: center;
`;
