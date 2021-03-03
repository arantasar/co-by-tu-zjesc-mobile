import {useState, useEffect} from 'react';
import {useContext} from 'react/cjs/react.development';
import userContext from './../context/UserContext';

const useRecipeCreator = () => {
  const {
    selectedIngredients,
    setSelectedIngredients,
    newRecipe,
    setNewRecipe,
  } = useContext(userContext);

  const toggleItem = (item, type) => {
    const candidate = newRecipe[type].find((i) => i.id === item.id);
    if (candidate) {
      const newItems = newRecipe[type].filter((i) => i !== candidate);
      setNewRecipe((prev) => ({
        ...prev,
        [type]: newItems,
      }));
    } else {
      setNewRecipe((prev) => ({
        ...prev,
        [type]: [...prev[type], item],
      }));
    }
  };

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

  const setRecipeToEdit = (recipe) => {
    const {
      id,
      recipeLines,
      name,
      description,
      categories,
      diets,
      size,
      prepareTime,
    } = recipe;
    setSelectedIngredients([...recipeLines]);
    setNewRecipe({
      id,
      name,
      description,
      categories,
      diets,
      size: String(size),
      prepareTime: String(prepareTime),
    });
  };

  const remove = (id) => {
    const candidate = selectedIngredients.find((i) => i.ingredient.id === id);
    setSelectedIngredients((prev) => prev.filter((i) => i !== candidate));
  };

  return {addToSelected, remove, toggleItem, setRecipeToEdit};
};

export default useRecipeCreator;
