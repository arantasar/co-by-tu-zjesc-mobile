import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, Image} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import styled from 'styled-components';
import useUnits from '../../hooks/useUnits';
import {COLORS} from '../../styles/variables';
import Background from '../../components/common/Background/Background';
import background2 from './../../assets/backgrounds/kola8b.png';
import {launchCamera} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
import axios from './../../axios/';

const AddUserIngredient = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('Wpisz nazwę');
  const [photoPreview, setPhotoPreview] = useState();
  const [selectedUnits, setSelectedUnits] = useState([]);
  const {units} = useUnits();

  const takePhoto = async () => {
    launchCamera(
      {
        mediaType: 'photo',
      },
      (photo) => {
        setPhotoPreview(photo);
      },
    );
  };

  const toggleSelected = (line) => {
    const candidate = selectedUnits.find((unit) => unit.id === line.id);
    if (candidate) {
      setSelectedUnits((prev) => prev.filter((unit) => unit.id !== line.id));
    } else {
      setSelectedUnits((prev) => [...prev, line]);
    }
  };

  const submitIngredient = () => {
    if (name && selectedUnits.length) {
      const data = new FormData();

      if (photoPreview && photoPreview.uri) {
        const file = {
          uri: photoPreview.uri,
          type: 'image/jpeg',
          name: 'photo.jpg',
        };

        data.append('photo', file);
      }

      data.append('name', name);
      data.append('units', JSON.stringify(selectedUnits));
      data.append('alternatives', JSON.stringify([]));

      axios({
        method: 'post',
        url: '/api/ingredients',
        data,
      }).then(() => {
        setName('Wpisz nazwę');
        setSelectedUnits([]);
        navigation.navigate('panel');
      });
    }
  };

  return (
    <ScrollView>
      <Header>Nazwa</Header>
      <Background image={background2}>
        <StyledInput
          onFocus={() => setName('')}
          value={name}
          defaultValue={'Wpisz nazwę'}
          onChangeText={(name) => setName(name)}
        />
      </Background>
      <Header>Jednostki</Header>
      <Background image={background2}>
        <IngredientList>
          {units.map((line) => (
            <IngredientItem
              onPress={() => toggleSelected(line)}
              key={line.id}
              isSelected={selectedUnits.find((unit) => unit.id === line.id)}>
              <Name>{line.name}</Name>
            </IngredientItem>
          ))}
        </IngredientList>
      </Background>
      <Header>Zdjęcie</Header>
      <Background image={background2}>
        <ButtonWrapper onPress={takePhoto} activeOpacity={0.5}>
          <StyledButton>Dodaj zdjęcie</StyledButton>
        </ButtonWrapper>
        {photoPreview ? (
          <Image
            style={{
              width: '100%',
              height: 600,
              resizeMode: 'contain',
            }}
            width={photoPreview.width}
            height={photoPreview.height}
            source={{
              uri: photoPreview.uri,
            }}
          />
        ) : null}
      </Background>
      <AcceptButton onPress={submitIngredient}>
        <Text style={{textAlign: 'center', color: 'white'}}>
          Dodaj składnik
        </Text>
      </AcceptButton>
    </ScrollView>
  );
};

export default AddUserIngredient;

const StyledInput = styled(TextInput)`
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  margin: 4px 0;
`;

const Header = styled(Text)`
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  color: black;
  padding: 5px;
  border: 1px solid ${COLORS.primary};
  background-color: white;
`;

const StyledView = styled(View)``;

const IngredientList = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 5px;
`;

const IngredientItem = styled(TouchableOpacity)`
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  border: ${(props) =>
    `1px ${props.isSelected ? 'solid' : 'dashed'} ${COLORS.primary}`};
  border-radius: 10px;
  margin: 5px 0;
`;

const Name = styled(Text)`
  text-align: center;
  font-weight: bold;
  margin-bottom: 5px;
`;

const ButtonWrapper = styled(TouchableOpacity)`
  width: 100%;
  background-color: ${COLORS.primary};
  margin: 4px 0;
`;

const StyledButton = styled(Text)`
  color: white;
  font-size: 20px;
  padding: 10px 0;
  width: 100%;
  text-align: center;
`;

const AcceptButton = styled(TouchableOpacity)`
  padding: 10px;
  background-color: green;
`;
