import {useState, useEffect} from 'react';
import {errorHandler} from '../common/errorHandler';
import axios from './../axios/';

const useTags = () => {
  const [categories, setCategories] = useState([]);
  const [diets, setDiets] = useState([]);
  const [isLoading, setIsisLoading] = useState(false);

  useEffect(() => {
    setIsisLoading(true);
    Promise.all([axios.get(`/api/categories`), axios.get(`/api/diets`)])
      .then(([categories, diets]) => {
        setCategories(categories.data);
        setDiets(diets.data);
      })
      .catch(errorHandler)
      .finally(() => setIsisLoading(false));
  }, []);

  return {categories, diets, isLoading};
};

export default useTags;
