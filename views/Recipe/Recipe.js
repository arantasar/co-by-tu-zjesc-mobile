import React from 'react';
import {View, Text} from 'react-native';

const Recipe = ({route}) => {
  const {id, name} = route.params;

  return (
    <View>
      <Text>{id}</Text>
      <Text>{name}</Text>
    </View>
  );
};

export default Recipe;
