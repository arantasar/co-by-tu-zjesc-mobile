import React, {useContext} from 'react';
import {View, Text, ScrollView} from 'react-native';
import useRecipe from './../../hooks/useRecipe';
import AdminIcons from './AdminIcons/AdminIcons';
import UserContext from './../../context/UserContext';
import Photo from './Photo/Photo';
import Avatar from './Avatar/Avatar';
import styled from 'styled-components';
import Details from './Details/Details';
import Ingredients from './Ingredients/Ingredients';
import Description from './Description/Description';

const Recipe = ({route}) => {
  const {id} = route.params;
  const {recipe} = useRecipe(id);
  const ctx = useContext(UserContext);
  const admin = ctx.user &&
    ctx.user.id === recipe &&
    recipe.user &&
    recipe.user.id && <AdminIcons />;

  return (
    <ScrollView>
      {recipe && (
        <>
          {admin}
          <Photo photoPath={'https://picsum.photos/300'} />
          <Author>
            <Avatar {...recipe.user} />
            <DateAdded>{recipe.dateAdded}</DateAdded>
          </Author>
          <Details size={recipe.size} prepareTime={recipe.prepareTime} />
          <Ingredients
            recipeLines={recipe.recipeLines}
            categories={recipe.categories}
            diets={recipe.diets}
          />
          <Description description={recipe.description} />
          <Text>Generuj listę zakupów</Text>
          <Text>Ikonki klikalne</Text>
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

const Author = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: white;
`;
