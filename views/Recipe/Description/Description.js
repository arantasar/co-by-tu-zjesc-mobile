import React from 'react';
import styled from 'styled-components';
import {View, Text} from 'react-native';
import {COLORS} from '../../../styles/variables';

const Description = ({description}) => (
  <View>
    <Header>Opis przygotowania</Header>
    <StyledText>{description}</StyledText>
  </View>
);

export default Description;

const Header = styled(Text)`
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  color: white;
  padding: 5px;
  background-color: ${COLORS.primary};
`;

const StyledText = styled(Text)`
  background-color: white;
  font-size: 16px;
  padding: 10px 5px;
`;
