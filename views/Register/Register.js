import React from 'react';
import styled from 'styled-components';
import {
  Text,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {COLORS} from '../../styles/variables';
import axios from './../../axios';
import {Formik} from 'formik';
import {validationSchema} from './validationSchema';
import {initialValues} from './initialValues';
import {useNavigation} from '@react-navigation/native';
import {errorHandler} from '../../common/errorHandler';

const Register = () => {
  const navigation = useNavigation();

  const goToLogin = () => navigation.navigate('login');
  const contentContainerStyle = {flexGrow: 1, justifyContent: 'center'};

  const registerHandler = ({email, password, name}) => {
    if (email && password) {
      axios
        .post('/api/users', {email, password, name})
        .then((res) => {
          Alert.alert('Konto utworzone', 'Możesz się zalogować', [
            {text: 'OK', onPress: () => navigation.navigate('login')},
          ]);
        })
        .catch(errorHandler);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={contentContainerStyle}
      endFillColor={COLORS.primary}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={registerHandler}>
        {({handleChange, handleSubmit, values, touched, errors}) => (
          <StyledView>
            <StyledInput
              autoFocus
              autoCompleteType={'email'}
              keyboardType={'email-address'}
              placeholder={'Adres email'}
              value={values.email}
              onChangeText={handleChange('email')}
            />
            {touched.email && errors.email ? (
              <Error>{errors.email}</Error>
            ) : null}
            <StyledInput
              placeholder={'Nazwa użytkownika'}
              value={values.name}
              onChangeText={handleChange('name')}
            />
            {touched.name && errors.name ? <Error>{errors.name}</Error> : null}
            <StyledInput
              secureTextEntry
              placeholder={'Hasło'}
              value={values.password}
              onChangeText={handleChange('password')}
            />
            {touched.password && errors.password ? (
              <Error>{errors.password}</Error>
            ) : null}
            <StyledInput
              secureTextEntry
              placeholder={'Powtórz hasło'}
              value={values.password2}
              onChangeText={handleChange('password2')}
            />
            {touched.password2 && errors.password2 ? (
              <Error>{errors.password2}</Error>
            ) : null}
            <TouchableOpacity onPress={handleSubmit} activeOpacity={0.5}>
              <StyledButton>Zarejestruj się</StyledButton>
            </TouchableOpacity>
          </StyledView>
        )}
      </Formik>
      <StyledView>
        <StyledText>
          Masz już konto? <Text onPress={goToLogin}>Zaloguj</Text> się!
        </StyledText>
      </StyledView>
    </ScrollView>
  );
};

export default Register;

const StyledView = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.primary};
  width: 100%;
`;

const StyledInput = styled(TextInput)`
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  margin-top: 20px;
  width: 80%;
`;

const StyledButton = styled(Text)`
  color: white;
  font-size: 20px;
  margin-top: 20px;
  border: 1px solid white;
  padding: 10px 20px;
`;

const StyledText = styled(Text)`
  color: white;
  margin: 20px 0;
`;

const Error = styled(Text)`
  color: white;
  margin-top: 5px;
  text-align: left;
  width: 80%;
`;
