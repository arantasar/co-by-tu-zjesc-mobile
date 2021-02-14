import React, {useContext, useState} from 'react';
import styled from 'styled-components';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import useTags from '../../../hooks/useTags';
import Tags from './../../../components/Search/Tags/Tags';
import Header from './../../../components/AddRecipe/Header/Header';
import axios from './../../../axios/';
import userContext from '../../../context/UserContext';
import useSearch from './../../../hooks/useSearch';
import {errorHandler} from './../../../common/errorHandler';
import {useNavigation} from '@react-navigation/native';

const Details = () => {
  const {categories, diets} = useTags();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {searchedIngredients} = useContext(userContext);
  const [value, onChangeText] = React.useState('1');
  const {toggleItem, data} = useSearch();
  const nav = useNavigation();

  const handleSubmit = () => {
    const searchData = {
      categories: data.categories,
      diets: data.diets,
      ingredients: searchedIngredients,
      size: [{name: value, id: value}],
    };

    setIsSubmitting(true);

    axios
      .post('/api/search', searchData)
      .then((res) => {
        if (res.data.length) {
          nav.navigate('searchResults', res.data);
        } else {
          errorHandler('Nie znaleziono żadnego przepisu, spróbuj inaczej');
        }
      })
      .catch(errorHandler)
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <ScrollView contentContainerStyle={{alignItems: 'center'}}>
      <HeaderWrapper>
        <Header text={'Wybierz kategorie'} />
      </HeaderWrapper>
      <Tags
        data={data}
        toggleItem={toggleItem}
        tags={categories}
        type={'categories'}
      />
      <HeaderWrapper>
        <Header text={'Wybierz typy diety'} />
      </HeaderWrapper>
      <Tags data={data} toggleItem={toggleItem} tags={diets} type={'diets'} />
      <HeaderWrapper>
        <Header text={'Wielkość porcji'} />
      </HeaderWrapper>
      <StyledInput
        keyboardType={'numeric'}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
      <Next onPress={handleSubmit} activeOpacity={0.5}>
        <StyledButton disabled={isSubmitting}>
          {isSubmitting ? 'Szukam....' : 'Szukaj'}
        </StyledButton>
      </Next>
    </ScrollView>
  );
};

export default Details;

const HeaderWrapper = styled(View)`
  margin-top: 10px;
  width: 100%;
`;

const Next = styled(TouchableOpacity)`
  width: 100%;
  background-color: green;
  margin: 10px 0;
`;

const StyledButton = styled(Text)`
  color: white;
  font-size: 20px;
  padding: 10px 0;
  width: 100%;
  text-align: center;
`;

const StyledInput = styled(TextInput)`
  height: 100px;
  width: 200px;
  text-align: center;
  font-size: 60px;
  background-color: white;
  border-radius: 15px;
  margin: 10px 0;
`;
