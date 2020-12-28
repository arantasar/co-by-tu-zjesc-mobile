import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';

const Date = ({date}) => {
  const day = date.slice(0, 2);
  const month = date.slice(3, 5);
  const year = date.slice(6, 10);
  const time = date.slice(11).split(':');
  const dateString = `${day}/${month}/${year}`;
  const timeString = `${time[0]}:${time[1]}`;

  return (
    <StyledDate>
      <StyledText>{dateString}</StyledText>
      <StyledText>{timeString}</StyledText>
    </StyledDate>
  );
};

export default Date;

const StyledDate = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px;
`;

const StyledText = styled(Text)`
  color: gray;
`;
