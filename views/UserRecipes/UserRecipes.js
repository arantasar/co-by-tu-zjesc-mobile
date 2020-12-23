import React, {useContext, useState} from 'react';
import {useEffect} from 'react';
import {Text, View} from 'react-native';
import {errorHandler} from '../../common/errorHandler';
import userContext from '../../context/UserContext';
import axios from './../../axios';

const UserRecipes = () => {
  const {user} = useContext(userContext);
  const [recipes, setRecipes] = useState([]);
  const id = user && user.id;

  useEffect(() => {
    console.log(id);
    axios
      .get(`api/users/${id}/recipes`)
      .then((res) => setRecipes(res.data))
      .catch(errorHandler);
  }, []);

  return (
    <View>
      <Text>User Recipes</Text>
    </View>
  );
};

export default UserRecipes;
