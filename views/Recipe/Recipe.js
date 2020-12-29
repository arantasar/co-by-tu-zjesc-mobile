import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import useRecipe from './../../hooks/useRecipe';
import AdminIcons from './AdminIcons/AdminIcons';
import UserContext from './../../context/UserContext';
import Photo from './Photo/Photo';

const Recipe = ({route}) => {
  const {id} = route.params;
  const {recipe} = useRecipe(id);
  const ctx = useContext(UserContext);
  const admin = ctx.user && ctx.user.id === recipe.user.id && <AdminIcons />;

  return (
    <View>
      {recipe && (
        <>
          {admin}
          <Photo photoPath={'https://picsum.photos/300'} />
          <Text>Data</Text>
          <Text>Czas przygotowania</Text>
          <Text>Ilość porcji</Text>
          <Text>Lista składników</Text>
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
