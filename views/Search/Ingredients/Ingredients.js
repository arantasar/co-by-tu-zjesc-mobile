import React, {useContext, useState} from 'react';
import {View, FlatList, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';
import userContext from '../../../context/UserContext';
import useIngredients from './../../../hooks/useIngredients';
import useSearch from '../../../hooks/useSearch';
import Ingredient from './../../../components/Search/Ingredent/Ingredient';
import IngredientsHeader from '../../../components/AddRecipe/IngredientsHeader/IngredientsHeader';
import {COLORS} from '../../../styles/variables';

const Ingredients = () => {
  const [value, onChangeText] = useState('');
  const {ingredients, isLoading} = useIngredients();
  const {toggleSelected, toggleItem} = useSearch();
  const {searchedIngredients, setSearchedIngredients} = useContext(userContext);
  const nav = useNavigation();

  const isSelected = ({id}) => searchedIngredients.find((i) => i.id === id);
  const search = ({name}) =>
    value ? name.toLocaleLowerCase().includes(value.toLocaleLowerCase()) : true;

  return (
    <View>
      <FlatList
        ListHeaderComponent={
          <IngredientsHeader value={value} onChangeText={onChangeText} />
        }
        data={ingredients.filter(search)}
        ListFooterComponentStyle={{flex: 1, justifyContent: 'flex-end'}}
        ListFooterComponent={
          <NextButton
            onPress={() => {
              if (searchedIngredients.length) {
                nav.navigate('searchDetails');
              }
            }}>
            <NextText>Dalej</NextText>
          </NextButton>
        }
        renderItem={({item}) => (
          <Ingredient
            ingredient={item}
            isSelected={isSelected(item)}
            toggleSelected={toggleSelected}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Ingredients;

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
