import {Alert} from 'react-native';

export const errorHandler = (error) => {
  const errResponse =
    (error.response && error.response.data && error.response.data.message) ||
    error.message ||
    error;
  Alert.alert('Błąd', errResponse);
};
