import {useState, useEffect} from 'react';
import {errorHandler} from '../common/errorHandler';
import axios from './../axios/';

const useIngredients = () => {
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsisLoading] = useState(false);

  useEffect(() => {
    setIsisLoading(true);
    axios
      .get(`/api/ingredients`)
      .then((res) => setIngredients(res.data))
      .catch(errorHandler)
      .finally(() => setIsisLoading(false));
  }, []);

  return {ingredients, isLoading};
};

export default useIngredients;
