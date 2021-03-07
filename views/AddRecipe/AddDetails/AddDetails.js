import React, {useContext, useState} from 'react';
import userContext from '../../../context/UserContext';
import styled from 'styled-components';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import {COLORS} from '../../../styles/variables';
import {validationSchema} from './validationSchema';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import useTags from '../../../hooks/useTags';
import {launchCamera} from 'react-native-image-picker';
import Tags from './../../../components/AddRecipe/Tags/Tags';
import Header from './../../../components/AddRecipe/Header/Header';
import axios from './../../../axios/';
import {errorHandler} from './../../../common/errorHandler';

const AddDetails = () => {
  const {
    setNewRecipe,
    newRecipe,
    token,
    selectedIngredients,
    resetNewRecipe,
  } = useContext(userContext);
  const [photoPreview, setPhotoPreview] = useState();
  const {categories, diets} = useTags();
  const navigation = useNavigation();
  const contentContainerStyle = {flexGrow: 1, justifyContent: 'center'};

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

  const recipeHandler = (values, {resetForm, setSubmitting}) => {
    setSubmitting(true);
    const {name, description, size, prepareTime} = values;
    if (name && description && size && prepareTime) {
      setNewRecipe((prev) => ({...prev, name, description}));

      const recipeLines = selectedIngredients.map(
        ({unit, amount, ...rest}) => ({
          unit,
          amount: Number(amount),
          ...rest,
        }),
      );

      console.log(recipeLines);

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
      data.append('description', description);
      data.append('size', size);
      data.append('prepareTime', prepareTime);
      data.append('recipeLines', JSON.stringify(recipeLines));
      data.append('categories', JSON.stringify(newRecipe.categories));
      data.append('diets', JSON.stringify(newRecipe.diets));

      const url = newRecipe.id
        ? '/api/recipes/update/' + newRecipe.id
        : '/api/recipes';

      axios
        .post(url, data, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          resetForm({
            name: '',
            description: '',
            size: '',
            prepareTime: '',
          });
          resetNewRecipe();
          navigation.navigate('recipe', {name: name, id: res.data.id});
        })
        .catch(errorHandler)
        .finally(() => {
          setSubmitting(false);
        });
    }
  };

  return (
    <ScrollView
      contentContainerStyle={contentContainerStyle}
      endFillColor={COLORS.primary}>
      <Formik
        initialValues={newRecipe}
        validationSchema={validationSchema}
        onSubmit={recipeHandler}>
        {({
          handleChange,
          handleSubmit,
          values,
          touched,
          errors,
          isSubmitting,
        }) => (
          <StyledView>
            <StyledInput
              autoFocus
              placeholder={'Nazwa'}
              value={values.name}
              onChangeText={handleChange('name')}
            />
            {touched.email && errors.email ? (
              <Error>{errors.email}</Error>
            ) : null}
            <StyledInput
              placeholder={'Czas przygotowania'}
              value={values.prepareTime}
              keyboardType={'numeric'}
              onChangeText={handleChange('prepareTime')}
            />
            {touched.email && errors.email ? (
              <Error>{errors.email}</Error>
            ) : null}
            <StyledInput
              placeholder={'Wielkość porcji'}
              value={values.size}
              keyboardType={'numeric'}
              onChangeText={handleChange('size')}
            />
            {touched.email && errors.email ? (
              <Error>{errors.email}</Error>
            ) : null}
            <StyledInput
              multiline={true}
              numberOfLines={4}
              placeholder={'Opis przygotowania'}
              value={values.description}
              onChangeText={handleChange('description')}
            />
            {touched.password && errors.password ? (
              <Error>{errors.password}</Error>
            ) : null}
            <HeaderWrapper>
              <Header text={'Wybierz kategorie'} />
            </HeaderWrapper>
            <Tags tags={categories} type={'categories'} />
            <HeaderWrapper>
              <Header text={'Wybierz typy diety'} />
            </HeaderWrapper>
            <Tags tags={diets} type={'diets'} />
            <ButtonWrapper onPress={takePhoto} activeOpacity={0.5}>
              <StyledButton>
                {newRecipe.photoPath ? ' Zmień' : 'Dodaj'} zdjęcie
              </StyledButton>
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
            ) : newRecipe.photoPath ? (
              <Image
                style={{
                  width: '100%',
                  height: 600,
                  resizeMode: 'contain',
                }}
                source={{
                  uri: 'https://picsum.photos/300',
                }}
              />
            ) : null}
            <Next onPress={handleSubmit} activeOpacity={0.5}>
              <StyledButton disabled={isSubmitting}>
                {isSubmitting ? 'Dodaję....' : 'Dodaj przepis'}
              </StyledButton>
            </Next>
          </StyledView>
        )}
      </Formik>
    </ScrollView>
  );
};

export default AddDetails;

const StyledView = styled(View)`
  flex: 1;
  align-items: center;
  width: 100%;
`;

const StyledInput = styled(TextInput)`
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
  width: 80%;
  border: 1px solid ${COLORS.primary};
`;

const Next = styled(TouchableOpacity)`
  width: 100%;
  background-color: green;
  margin: 10px 0;
`;

const ButtonWrapper = styled(TouchableOpacity)`
  width: 100%;
  background-color: ${COLORS.primary};
  margin: 10px 0;
`;

const StyledButton = styled(Text)`
  color: white;
  font-size: 20px;
  padding: 10px 0;
  width: 100%;
  text-align: center;
`;

const Error = styled(Text)`
  color: white;
  margin-top: 5px;
  text-align: left;
  width: 80%;
`;

const HeaderWrapper = styled(View)`
  margin-top: 10px;
  width: 100%;
`;
