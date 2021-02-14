import React, {useContext} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {COLORS} from '../../../styles/variables';
import useSearch from '../../../hooks/useSearch';

const Tags = ({tags, type, data, toggleItem}) => {
  

  return (
    <Units>
      {tags.map((tag) => (
        <UnitWrapper
          isSelected={data[type].find((i) => i.id === tag.id)}
          key={tag.id}
          onPress={() => {
            toggleItem(tag, type);
          }}>
          <Unit isSelected={data[type].find((i) => i.id === tag.id)}>
            {tag.name}
          </Unit>
        </UnitWrapper>
      ))}
    </Units>
  );
};

export default Tags;

const Units = styled(View)`
  width: 80%;
`;

const UnitWrapper = styled(TouchableOpacity)`
  border-radius: 10px;
  border: ${(props) =>
    props.isSelected ? '1px solid ' + COLORS.primary : '1px dashed black'};
  padding: 10px 20px;
  background-color: white;
  width: 100%;
  margin-top: 10px;
`;

const Unit = styled(Text)`
  text-align: center;
  color: black;
`;
