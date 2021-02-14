import {useState} from 'react';
import {useContext} from 'react/cjs/react.development';
import userContext from './../context/UserContext';

const useSearch = () => {
  const {searchedIngredients, setSearchedIngredients} = useContext(userContext);
  const [data, setData] = useState({
    diets: [],
    categories: [],
  });

  const toggleItem = (item, type) => {
    const candidate = data[type].find((i) => i.id === item.id);
    if (candidate) {
      const newItems = data[type].filter((i) => i !== candidate);
      setData((prev) => ({
        ...prev,
        [type]: newItems,
      }));
    } else {
      setData((prev) => ({
        ...prev,
        [type]: [...prev[type], item],
      }));
    }
  };

  const toggleSelected = (ingredient) => {
    console.log(ingredient);
    const candidate = searchedIngredients.find((i) => i.id === ingredient.id);
    if (!candidate) {
      setSearchedIngredients((prev) => [...prev, ingredient]);
    } else {
      setSearchedIngredients((prev) => prev.filter((i) => i !== candidate));
    }
  };

  return {toggleSelected, toggleItem, data};
};

export default useSearch;
