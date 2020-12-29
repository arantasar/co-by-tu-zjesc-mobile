import React from 'react';
import styled from 'styled-components';
import {Image} from 'react-native';

const Photo = ({photoPath}) => <StyledImage source={{uri: photoPath}} />;

export default Photo;

const StyledImage = styled(Image)`
  width: 100%;
  height: 300px;
`;
