import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ScrollView, Image, View, Text, ImageBackground} from 'react-native';
import Profile from '../../components/userPanel/Profile/Profile';
import background from './../../assets/backgrounds/kola5b.png';
import styled from 'styled-components';
import axios from './../../axios/';
import RecipeCard from './../../components/common/RecipeCard/RecipeCard';

const User = () => {
  const [user, setUser] = useState();
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    axios.get('/api/users/' + route.params.id).then((res) => {
      setUser(res.data);
    });
  }, []);

  return (
    <Content>
      {user && <Profile user={user} />}
      <ScrollView>
        <Background source={background}>
          {user && <Description>{user.description}</Description>}
          {user &&
            user.recipes.map((recipe) => (
              <RecipeCard recipe={recipe} key={recipe.id} />
            ))}
        </Background>
      </ScrollView>
    </Content>
  );
};

export default User;

const Background = styled(ImageBackground)`
  flex: 1;
  padding: 5px;
`;

const Description = styled(Text)`
  padding: 10px;
`;

const Content = styled(View)`
  flex: 1;
`;
