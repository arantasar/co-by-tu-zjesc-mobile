import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import useRecipe from './../../hooks/useRecipe';
import AdminIcons from './AdminIcons/AdminIcons';
import UserContext from './../../context/UserContext';
import Photo from './Photo/Photo';
import Avatar from './Avatar/Avatar';
import styled from 'styled-components';

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
          <Author>
            <Avatar {...recipe.user} />
            <DateAdded>{recipe.dateAdded}</DateAdded>
          </Author>
          <Text>Czas przygotowania</Text>
          <Text>Ilość porcji</Text>
          <Text>Lista składników</Text>
          <Text>Opis</Text>
          <Text>Generuj listę zakupów</Text>
          <Text>Ikonki klikalne</Text>
        </>
      )}
    </View>
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
  padding: 0 10px;
  margin: 10px 0;
`;
