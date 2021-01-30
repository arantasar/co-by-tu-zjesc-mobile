import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import {useContext} from 'react/cjs/react.development';
import styled from 'styled-components';
import userContext from '../../../context/UserContext';
import useRecipeCreator from '../../../hooks/useRecipeCreator';
import {COLORS} from '../../../styles/variables';

const AddAmount = ({route}) => {
  const {selectedIngredients} = useContext(userContext);
  const {ingredient} = route.params;
  const [selectedUnit, setSelectedUnit] = useState(ingredient.units[0].id); // lub zaznaczona wcześniej
  const [value, onChangeText] = React.useState(
    (selectedIngredients.find((i) => i.ingredient.id) &&
      selectedIngredients.find((i) => i.ingredient.id).amount) ||
      '1',
  );
  const contentContainerStyle = {flexGrow: 1, alignItems: 'center'};
  const {addToSelected} = useRecipeCreator();
  const nav = useNavigation();

  return (
    <ScrollView contentContainerStyle={contentContainerStyle}>
      <PhotoWrapper>
        <Photo source={{uri: 'https://picsum.photos/200'}} />
      </PhotoWrapper>
      <Units>
        {ingredient.units.map((unit) => (
          <UnitWrapper
            isSelected={selectedUnit === unit.id}
            key={unit.id}
            onPress={() => {
              setSelectedUnit(unit.id);
            }}>
            <Unit isSelected={selectedUnit === unit.id}>{unit.name}</Unit>
          </UnitWrapper>
        ))}
      </Units>
      <StyledInput
        keyboardType={'numeric'}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
      <AcceptWrapper
        onPress={() => {
          addToSelected(
            ingredient,
            ingredient.units.find((u) => u.id === selectedUnit),
            value,
          );
          nav.navigate('addIngredients');
        }}>
        <Accept>Zatwierdź</Accept>
      </AcceptWrapper>
    </ScrollView>
  );
};

export default AddAmount;

const Photo = styled(Image)`
  width: 200px;
  height: 200px;
  border-radius: 15px;
`;
const PhotoWrapper = styled(View)`
  margin: 20px 0 10px 0;
  border-radius: 15px;
  border: 2px solid ${COLORS.primary};
`;

const Units = styled(View)`
  flex-direction: row;
`;

const UnitWrapper = styled(TouchableOpacity)`
  border-radius: 15px;
  border: ${(props) =>
    props.isSelected ? '1px solid ' + COLORS.primary : '1px dashed black'};
  background-color: ${(props) => (props.isSelected ? COLORS.primary : 'white')};
  margin: 0 5px;
  padding: 10px 20px;
`;

const Unit = styled(Text)`
  color: ${(props) => (props.isSelected ? 'white' : 'black')};
`;

const StyledInput = styled(TextInput)`
  height: 100px;
  width: 200px;
  text-align: center;
  font-size: 60px;
  background-color: white;
  border-radius: 15px;
  margin: 10px 0;
`;

const AcceptWrapper = styled(TouchableOpacity)`
  background-color: green;
  padding: 10px;
  width: 100%;
  margin-top: 10px;
`;

const Accept = styled(Text)`
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
  color: white;
`;
