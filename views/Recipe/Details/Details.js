import React from 'react';
import styled from 'styled-components';
import {View, Text} from 'react-native';
import {COLORS} from '../../../styles/variables';

const Details = ({prepareTime, size}) => (
  <StyledViews>
    <PreparationTime>
      <Header>Czas przygotowania</Header>
      <Text>{prepareTime} minut</Text>
    </PreparationTime>
    <Size>
      <Header>Ilość porcji</Header>
      <Text>{size}</Text>
    </Size>
  </StyledViews>
);

export default Details;

const StyledViews = styled(View)`
  flex-direction: row;
  justify-content: space-around;
  padding: 20px 10px;
  background-color: white;
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
