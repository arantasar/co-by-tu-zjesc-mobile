import React, {useState} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import useIngredients from '../../../hooks/useIngredients';
import styled from 'styled-components';
import {COLORS} from '../../../styles/variables';
import {useNavigation} from '@react-navigation/native';
import userContext from '../../../context/UserContext';
import {useContext} from 'react/cjs/react.development';
import useRecipeCreator from '../../../hooks/useRecipeCreator';
import IngredientsHeader from '../../../components/AddRecipe/IngredientsHeader/IngredientsHeader';
import Ingredient from './../../../components/AddRecipe/Ingredient/Ingredient';

const AddIngredients = () => {
  const [value, onChangeText] = useState('');
  const {ingredients} = useIngredients();
  const {remove} = useRecipeCreator();
  const {selectedIngredients} = useContext(userContext);
  const nav = useNavigation();

  const isSelected = ({id}) =>
    selectedIngredients.find((i) => i.ingredient.id === id);
  const getUnitName = ({id}) => {
    const candidate = selectedIngredients.find((i) => i.ingredient.id === id);
    return candidate && candidate.unit.name;
  };
  const getAmount = ({id}) => {
    const candidate = selectedIngredients.find((i) => i.ingredient.id === id);
    return candidate && candidate.amount;
  };
  const search = ({name}) =>
    value ? name.toLocaleLowerCase().includes(value.toLocaleLowerCase()) : true;

  return (
    <View>
      <FlatList
        data={ingredients.filter(search)}
        renderItem={({item}) => (
          <Ingredient
            ingredient={item}
            isSelected={isSelected(item)}
            amount={getAmount(item)}
            unit={getUnitName(item)}
            remove={remove}
          />
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <IngredientsHeader value={value} onChangeText={onChangeText} />
        }
      />
      <NextButton>
        <NextText>Dalej</NextText>
      </NextButton>
    </View>
  );
};

export default AddIngredients;

const NextButton = styled(TouchableOpacity)`
  background-color: ${COLORS.primary};
  padding: 10px 0;
  margin-top: 5px;
`;

const NextText = styled(Text)`
  color: white;
  font-size: 18px;
  text-align: center;
`;
