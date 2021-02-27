import {useState, useEffect} from 'react';
import {errorHandler} from '../common/errorHandler';
import axios from './../axios/';

const useRecipe = (id, size) => {
  const [recipe, setRecipe] = useState();
  const [isLoading, setIsisLoading] = useState(false);

  useEffect(() => {
    setIsisLoading(true);
    axios
      .get(`/api/recipes/${id}/${size}`)
      .then((res) => setRecipe(res.data))
      .catch(errorHandler)
      .finally(() => setIsisLoading(false));
  }, []);

  return {recipe, isLoading, setRecipe};
};

export default useRecipe;
