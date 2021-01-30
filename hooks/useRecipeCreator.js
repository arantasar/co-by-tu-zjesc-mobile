import {useState, useEffect} from 'react';
import {useContext} from 'react/cjs/react.development';
import userContext from '../context/UserContext';

const useRecipeCreator = () => {
  const {selectedIngredients, setSelectedIngredients} = useContext(userContext);

  const addToSelected = (ingredient, unit, amount) => {
    const candidate = selectedIngredients.find(
      (i) => i.ingredient.id === ingredient.id,
    );
    if (!candidate) {
      setSelectedIngredients((prev) => [...prev, {ingredient, unit, amount}]);
    } else {
      candidate.amount = amount;
      setSelectedIngredients((prev) => [...prev, candidate]);
    }
  };

  const remove = (id) => {
    const candidate = selectedIngredients.find((i) => i.ingredient.id === id);
    setSelectedIngredients((prev) => prev.filter((i) => i !== candidate));
  };

  const toggleSelection = (ingredient) => {
    const candidate = selectedIngredients.find(
      (selected) => selected.id === ingredient.id,
    );
    if (candidate) {
      setSelectedIngredients((prev) =>
        prev.filter((item) => item.id !== ingredient.id),
      );
    } else {
      setSelectedIngredients((prev) => [...prev, ingredient.id]);
    }
  };

  return {addToSelected, remove};
};

export default useRecipeCreator;
