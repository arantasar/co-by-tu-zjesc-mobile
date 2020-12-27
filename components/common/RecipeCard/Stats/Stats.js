import React from 'react';
import styled from 'styled-components';
import {View, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEye, faHeart, faThumbsUp} from '@fortawesome/free-solid-svg-icons';

const Stats = ({inFavourite, likes, viewCounter}) => (
  <StyledStats>
    <StyledStat>
      <FontAwesomeIcon icon={faEye} />
      <Value>{viewCounter}</Value>
      <FontAwesomeIcon icon={faThumbsUp} color={'blue'} />
      <Value>{likes}</Value>
    </StyledStat>
    <StyledStat>
      <FontAwesomeIcon icon={faHeart} color={'red'} />
      <Value>{inFavourite}</Value>
    </StyledStat>
  </StyledStats>
);

export default Stats;

const StyledStats = styled(View)`
  align-items: flex-start;
  justify-content: space-around;
`;

const Value = styled(Text)`
  margin: 0 15px 0 5px;
`;

const StyledStat = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
