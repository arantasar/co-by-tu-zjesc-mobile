import React, {useContext} from 'react';
import styled from 'styled-components';
import {
  Text,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import userContext from '../../context/UserContext';
import {COLORS} from '../../styles/variables';
import axios from './../../axios';
import {Formik} from 'formik';
import {validationSchema} from './validationSchema';
import {initialValues} from './initialValues';
import {useNavigation} from '@react-navigation/native';
import {errorHandler} from '../../common/errorHandler';

const Login = () => {
  const ctx = useContext(userContext);
  const navigation = useNavigation();

  const goToRegister = () => navigation.navigate('register');
  const contentContainerStyle = {flexGrow: 1, justifyContent: 'center'};

  const loginHandler = ({email, password}) => {
    if (email && password) {
      axios
        .post('/api/users/login', {email, password})
        .then((res) => {
          const {user, token} = res.data;
          ctx.login(user, token);
          navigation.navigate('home');
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
        onSubmit={loginHandler}>
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
              secureTextEntry
              placeholder={'Hasło'}
              value={values.password}
              onChangeText={handleChange('password')}
            />
            {touched.password && errors.password ? (
              <Error>{errors.password}</Error>
            ) : null}
            <TouchableOpacity onPress={handleSubmit} activeOpacity={0.5}>
              <StyledButton>Zaloguj się</StyledButton>
            </TouchableOpacity>
          </StyledView>
        )}
      </Formik>
      <StyledView>
        <StyledText>
          Nie masz konta? <Text onPress={goToRegister}>Zarestruj się!</Text>
        </StyledText>
      </StyledView>
    </ScrollView>
  );
};

export default Login;

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
  margin: 20px 0;
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
