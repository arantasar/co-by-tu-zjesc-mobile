import {useState, useEffect} from 'react';
import axios from './../axios/';
import {errorHandler} from './../common/errorHandler';

const useMostPopular = () => {
  const [mostPopular, setMostPopular] = useState([]);
  useEffect(() => {
    axios
      .get('/api/recipes/mostliked/10')
      .then((res) => setMostPopular(res.data))
      .catch(errorHandler);
  }, []);

  return mostPopular;
};

export default useMostPopular;
