export const errorHandler = (error) => {
  const errResponse =
    (error.response && error.response.data && error.response.data.message) ||
    error.message;
  Alert.alert('Błąd', errResponse);
};
