import React from 'react';
import {ImageBackground} from 'react-native';
import styled from 'styled-components';

const Background = ({image, children}) => (
  <StyledBackground source={image}>{children}</StyledBackground>
);

export default Background;

const StyledBackground = styled(ImageBackground)`
  flex: 1;
  padding: 5px;
`;
