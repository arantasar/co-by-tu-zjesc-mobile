import {useState, useEffect} from 'react';
import {errorHandler} from '../common/errorHandler';
import axios from './../axios/';

const useUnits = () => {
  const [units, setUnits] = useState([]);
  const [isLoading, setIsisLoading] = useState(false);

  useEffect(() => {
    setIsisLoading(true);
    axios
      .get(`/api/units`)
      .then((res) => setUnits(res.data))
      .catch(errorHandler)
      .finally(() => setIsisLoading(false));
  }, []);

  return {units, isLoading};
};

export default useUnits;
