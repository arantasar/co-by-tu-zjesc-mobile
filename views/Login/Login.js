import React, {useContext, useState} from 'react';
import styled from 'styled-components';
import {Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import userContext from '../../context/UserContext';
import {COLORS} from '../../styles/variables';
import axios from 'axios';
import {URL_BASE} from './../../config/config';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const ctx = useContext(userContext);

  const loginHandler = () => {
    if (email && password) {
      axios
        .post(`${URL_BASE}/api/users/login`, {email, password})
        .then((res) => {
          const {user, token} = res.data;
          ctx.setUser(user);
          ctx.setToken(token);
        })
        .catch(function (error) {
          const errResponse =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message;
          Alert.alert('Błąd', errResponse);
        });
    }
  };

  return (
    <StyledView>
      <StyledInput
        autoFocus
        autoCompleteType={'email'}
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType={'email-address'}
        placeholder={'Adres email'}
      />
      <StyledInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder={'Hasło'}
      />
      <TouchableOpacity onPress={loginHandler} activeOpacity={0.5}>
        <StyledButton>Zaloguj się</StyledButton>
      </TouchableOpacity>
      <StyledText>Nie masz konta? Zarestruj się!</StyledText>
    </StyledView>
  );
};

export default Login;

const StyledView = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.primary};
`;

const StyledInput = styled(TextInput)`
  background-color: white;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
  width: 80%;
`;

const StyledButton = styled(Text)`
  color: white;
  font-size: 20px;
`;

const StyledText = styled(Text)`
  color: white;
  margin-top: 20px;
`;
