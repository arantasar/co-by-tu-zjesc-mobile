import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import useRecipe from './../../hooks/useRecipe';
import AdminIcons from './AdminIcons/AdminIcons';
import UserContext from './../../context/UserContext';

const Recipe = ({route}) => {
  const {id} = route.params;
  const {recipe} = useRecipe(id);
  const ctx = useContext(UserContext);

  return (
    <View>
      {recipe && (
        <>
          {ctx.user && ctx.user.id === recipe.user.id && <AdminIcons />}
          <Text>{recipe.name}</Text>
          <Text>Data</Text>
          <Text>Czas przygotowania</Text>
          <Text>Ilość porcji</Text>
          <Text>Lista składników</Text>
          <Text>Zdjęcie</Text>
          <Text>Opis</Text>
          <Text>Generuj listę zakupów</Text>
          <Text>Ikonki klikalne</Text>
          <Text>Autor z awatarem</Text>
        </>
      )}
    </View>
  );
};

export default Recipe;
