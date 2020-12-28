import {useState, useEffect} from 'react';
import axios from './../axios/';
import {errorHandler} from './../common/errorHandler';

const useNewestRecipes = () => {
  const [newest, setNewest] = useState([]);
  useEffect(() => {
    axios
      .get('/api/recipes/newest/10')
      .then((res) => setNewest(res.data))
      .catch(errorHandler);
  }, []);

  return newest;
};

export default useNewestRecipes;
