import React from 'react';
import styled from 'styled-components';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const GlassLink = ({text, to, handler}) => {
  const nav = useNavigation();

  const clickHandler = () => {
    if (handler) {
      handler();
    } else {
      nav.navigate(to);
    }
  };

  return (
    <Glass onPress={clickHandler}>
      <Text>{text}</Text>
    </Glass>
  );
};

export default GlassLink;

const Glass = styled(TouchableOpacity)`
  padding: 20px;
  margin: 5px 10px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.4);
`;
