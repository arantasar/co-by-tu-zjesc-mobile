import React from 'react';
import styled from 'styled-components';
import {View, Text} from 'react-native';
import {COLORS} from './../../../styles/variables';

const Header = ({text}) => (
  <StyledHeader>
    <HeaderText>{text}</HeaderText>
  </StyledHeader>
);

export default Header;

const StyledHeader = styled(View)`
  background-color: ${COLORS.primary};
  padding: 10px 0;
  width: 100%;
`;

const HeaderText = styled(Text)`
  color: white;
  text-align: center;
  font-size: 18px;
`;
