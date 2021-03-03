import {useState, useEffect, useContext} from 'react';
import {errorHandler} from '../common/errorHandler';
import axios from './../axios/';
import UserContext from './../context/UserContext';
import {useIsFocused} from '@react-navigation/native';

const useRecipe = (id, size) => {
  const [recipe, setRecipe] = useState();
  const [isLoading, setIsisLoading] = useState(false);
  const {token} = useContext(UserContext);
  const isFocused = useIsFocused();

  const deleteRecipe = () => {
    return axios
      .delete(`/api/recipes/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch(errorHandler);
  };

  useEffect(() => {
    setIsisLoading(true);
    axios
      .get(`/api/recipes/${id}/${size}`)
      .then((res) => setRecipe(res.data))
      .catch(errorHandler)
      .finally(() => setIsisLoading(false));
  }, [isFocused]);

  return {recipe, isLoading, setRecipe, deleteRecipe};
};

export default useRecipe;
