import React from 'react';
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';
import hero from './../../assets/hero/home.jpg';
import {COLORS} from './../../styles/variables';

const height = Dimensions.get('window').height;

const Hero = () => {
  const nav = useNavigation();

  function onPress() {
    nav.navigate('search');
  }

  return (
    <StyledImageBackground source={hero}>
      <StyledText>Nie masz pomysłu na obiad?</StyledText>
      <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
        <Button>Znajdź go!</Button>
      </TouchableOpacity>
    </StyledImageBackground>
  );
};

export default Hero;

const StyledImageBackground = styled(ImageBackground)`
  width: 100%;
  height: ${height / 2}px;
  padding: 20px;
  flex: 1;
  justify-content: flex-end;
`;

const StyledText = styled(Text)`
  color: white;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 12px;
`;

const Button = styled(Text)`
  background-color: ${COLORS.primary};
  font-weight: bold;
  padding: 10px;
  color: white;
  text-align: center;
  text-transform: uppercase;
  font-size: 24px;
`;
