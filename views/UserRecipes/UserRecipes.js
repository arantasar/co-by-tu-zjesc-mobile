import React, {useContext, useState} from 'react';
import {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {errorHandler} from '../../common/errorHandler';
import RecipeCard from '../../components/common/RecipeCard/RecipeCard';
import Background from './../../components/common/Background/Background';
import userContext from '../../context/UserContext';
import axios from './../../axios';
import background from './../../assets/backgrounds/kola8b.png';
import styled from 'styled-components';

const UserRecipes = () => {
  const {user} = useContext(userContext);
  const [recipes, setRecipes] = useState([]);
  const id = user && user.id;

  useEffect(() => {
    axios
      .get(`api/users/${id}/recipes`)
      .then((res) => setRecipes(res.data))
      .catch(errorHandler);
  }, []);

  return (
    <StyledView>
      <Background image={background}>
        <ScrollView>
          {recipes.map((recipe) => (
            <RecipeCard recipe={recipe} key={recipe.id} />
          ))}
        </ScrollView>
      </Background>
    </StyledView>
  );
};

export default UserRecipes;

const StyledView = styled(View)`
  flex: 1;
`;
