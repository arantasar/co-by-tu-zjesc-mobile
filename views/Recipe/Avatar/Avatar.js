import React from 'react';
import styed from 'styled-components';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import userDefault from './../../../assets/userDefault.png';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';

const Avatar = ({id, name, photoPath}) => {
  const nav = useNavigation();

  return (
    <StyledView onPress={() => console.log(id)}>
      <StyledImage source={userDefault} />
      <StyledText>{name}</StyledText>
    </StyledView>
  );
};

export default Avatar;

const StyledImage = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 10px;
`;

const StyledView = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;

const StyledText = styled(Text)`
  font-weight: bold;
  flex: 1;
`;
