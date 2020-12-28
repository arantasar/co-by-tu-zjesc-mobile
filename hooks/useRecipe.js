import {useState, useEffect} from 'react';
import {errorHandler} from '../common/errorHandler';
import axios from './../axios/';

const useRecipe = (id) => {
  const [recipe, setRecipe] = useState();
  const [isLoading, setIsisLoading] = useState(false);

  useEffect(() => {
    setIsisLoading(true);
    axios
      .get(`/api/recipes/${id}`)
      .then((res) => setRecipe(res.data))
      .catch(errorHandler)
      .finally(() => setIsisLoading(false));
  }, []);

  return {recipe, isLoading};
};

export default useRecipe;
