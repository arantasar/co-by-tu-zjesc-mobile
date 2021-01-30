import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {COLORS} from './../../../styles/variables';
import styled from 'styled-components';

const IngredientsHeader = ({value, onChangeText}) => (
  <>
    <Header>
      <HeaderText>Wybierz składniki</HeaderText>
    </Header>
    <Input>
      <FontAwesomeIcon icon={faSearch} size={20} />
      <StyledInput onChangeText={(text) => onChangeText(text)} value={value} />
    </Input>
  </>
);

export default IngredientsHeader;

const Header = styled(View)`
  background-color: ${COLORS.primary};
  padding: 10px 0;
`;

const Input = styled(View)`
  background-color: white;
  padding: 5px 10px;
  flex-direction: row;
  align-items: center;
`;

const StyledInput = styled(TextInput)`
  margin-left: 10px;
`;

const HeaderText = styled(Text)`
  color: white;
  text-align: center;
  font-size: 18px;
`;
