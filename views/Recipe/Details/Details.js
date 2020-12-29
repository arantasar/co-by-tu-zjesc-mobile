import React from 'react';
import styled from 'styled-components';
import {View, Text} from 'react-native';
import {COLORS} from '../../../styles/variables';

const Details = () => (
  <StyledViews>
    <PreparationTime>
      <Header>Czas przygotowania</Header>
      <Text>30 minut</Text>
    </PreparationTime>
    <Size>
      <Header>Ilość porcji</Header>
      <Text>4</Text>
    </Size>
  </StyledViews>
);

export default Details;

const StyledViews = styled(View)`
  flex-direction: row;
  justify-content: space-around;
  padding: 0 10px;
`;

const PreparationTime = styled(View)`
  align-items: center;
`;

const Size = styled(View)`
  align-items: center;
`;

const Header = styled(Text)`
  font-weight: bold;
  color: ${() => COLORS.primary};
`;
