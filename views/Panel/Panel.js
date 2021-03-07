import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScrollView, Image, View, Text, ImageBackground} from 'react-native';
import userContext from '../../context/UserContext';
import Profile from '../../components/userPanel/Profile/Profile';
import background from './../../assets/backgrounds/kola5b.png';
import styled from 'styled-components';
import GlassLink from '../../components/userPanel/GlassLink/GlassLink';

const Panel = () => {
  const ctx = useContext(userContext);
  const navigation = useNavigation();
  const logoutHandler = () => {
    ctx.logout();
    navigation.navigate('home');
  };

  const links = [
    {text: 'Moje przepisy', to: 'userRecipes'},
    {text: 'Dodaj przepis', to: 'addIngredients'},
    {text: 'Ulubione', to: 'favourites'},
    {text: 'Dodaj składnik', to: 'addIngredient'},
    {text: 'Edytuj', to: 'editProfile'},
    {text: 'Wyloguj się', handler: logoutHandler},
  ];

  return (
    <Content>
      <Profile />
      <ScrollView>
        <Background source={background}>
          {links.map(({text, to, handler}) => (
            <GlassLink key={text} text={text} to={to} handler={handler} />
          ))}
        </Background>
      </ScrollView>
    </Content>
  );
};

export default Panel;

const Background = styled(ImageBackground)`
  flex: 1;
  padding: 5px;
`;

const Content = styled(View)`
  flex: 1;
`;
