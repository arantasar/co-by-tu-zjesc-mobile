import React from 'react';
import {View, TextInput} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Search = ({value, onChangeText}) => (
  <Input>
    <FontAwesomeIcon icon={faSearch} size={20} />
    <StyledInput onChangeText={(text) => onChangeText(text)} value={value} />
  </Input>
);

export default Search;

const Input = styled(View)`
  background-color: white;
  padding: 5px 10px;
  flex-direction: row;
  align-items: center;
`;

const StyledInput = styled(TextInput)`
  margin-left: 10px;
`;
