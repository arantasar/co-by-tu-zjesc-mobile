import React, {useContext, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Alert} from 'react-native';
import useRecipe from './../../hooks/useRecipe';
import AdminIcons from './AdminIcons/AdminIcons';
import UserContext from './../../context/UserContext';
import Photo from './Photo/Photo';
import Avatar from './Avatar/Avatar';
import styled from 'styled-components';
import Details from './Details/Details';
import Ingredients from './Ingredients/Ingredients';
import Description from './Description/Description';
import Stats from './Stats/Stats';
import {useNavigation} from '@react-navigation/native';
import axios from './../../axios/';
import useRecipeCreator from '../../hooks/useRecipeCreator';

const Recipe = ({route}) => {
  const {id, size} = route.params;
  const {recipe, setRecipe, deleteRecipe} = useRecipe(id, size);
  const ctx = useContext(UserContext);
  const {setRecipeToEdit} = useRecipeCreator();
  const admin = ctx.user &&
    ctx.user.id === recipe &&
    recipe.user &&
    recipe.user.id && <AdminIcons />;

  const handleDelete = () => {
    Alert.alert(
      'Usuń przepis',
      'Czy na pewno usunąć przepis ' + recipe.name,
      [
        {
          text: 'Nie',
          style: 'cancel',
        },
        {
          text: 'Tak',
          onPress: () => {
            deleteRecipe().then(nav.navigate('userRecipes'));
          },
        },
      ],
      {cancelable: false},
    );
  };

  const edit = () => {
    setRecipeToEdit(recipe);
    nav.navigate('edit');
  };

  const refresh = (recipe, user) => {
    setRecipe(recipe);
    if (user) {
      ctx.updateUser(user);
    }
  };

  const addToMyWeek = async () => {
    await axios.post(
      '/api/users/week',
      {
        recipeId: recipe.id,
        size,
      },
      {
        headers: {
          Authorization: `Bearer ${ctx.token}`,
        },
      },
    );
    const week = await axios.post('/api/users/getweek', null, {
      headers: {
        Authorization: `Bearer ${ctx.token}`,
      },
    });
    ctx.setWeek(week.data);
    nav.navigate('week');
  };

  const nav = useNavigation();

  return (
    <ScrollView>
      {recipe && (
        <>
          {admin}
          <Photo photoPath={recipe.photoPath} />
          <Author>
            <Avatar {...recipe.user} />
            <DateAdded>{recipe.dateAdded}</DateAdded>
          </Author>
          <Details size={recipe.size} prepareTime={recipe.prepareTime} />
          <Stats
            refresh={refresh}
            inFavourite={recipe.inFavourite}
            likes={recipe.likes}
            viewCounter={recipe.viewCounter}
            recipeId={recipe.id}
          />
          <Ingredients
            recipeLines={recipe.recipeLines}
            categories={recipe.categories}
            diets={recipe.diets}
          />
          <Description description={recipe.description} />
          <GenerateList
            onPress={() =>
              nav.navigate('shopping', {name: recipe.name, id: recipe.id, size})
            }>
            <Text style={{textAlign: 'center', color: 'white'}}>
              Generuj listę zakupów
            </Text>
          </GenerateList>
          {ctx.user && ctx.user.id && (
            <MyWeek onPress={addToMyWeek}>
              <Text style={{textAlign: 'center', color: 'white'}}>
                Dodaj do mojego tygodnia
              </Text>
            </MyWeek>
          )}
          {ctx.user && ctx.user.id === recipe.userId && (
            <>
              <Edit onPress={edit}>
                <Text style={{textAlign: 'center', color: 'black'}}>
                  Edytuj
                </Text>
              </Edit>
              <Delete onPress={handleDelete}>
                <Text style={{textAlign: 'center', color: 'white'}}>
                  Usuń przepis
                </Text>
              </Delete>
            </>
          )}
        </>
      )}
    </ScrollView>
  );
};

export default Recipe;

const DateAdded = styled(Text)`
  color: gray;
  flex: 1;
  text-align: right;
`;

const Author = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: white;
`;

const GenerateList = styled(TouchableOpacity)`
  padding: 10px;
  background-color: green;
`;

const MyWeek = styled(TouchableOpacity)`
  padding: 10px;
  background-color: black;
`;

const Delete = styled(TouchableOpacity)`
  padding: 10px;
  background-color: red;
`;

const Edit = styled(TouchableOpacity)`
  padding: 10px;
  background-color: white;
`;
