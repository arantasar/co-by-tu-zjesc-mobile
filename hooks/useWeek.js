import {useState, useEffect, useContext} from 'react';
import userContext from '../context/UserContext';

const useWeek = () => {
  const {week} = useContext(userContext);
  const [names, setNames] = useState([]);
  const [recipeLines, setRecipeLines] = useState([]);

  useEffect(() => {
    const names = week.map(({name, itemId}) => ({name, itemId}));
    const recipeLines = week
      .flatMap((recipe) => recipe.recipeLines)
      .reduce((prev, current) => {
        const candidate = prev.find(
          (line) =>
            line.ingredient.id === current.ingredient.id &&
            line.unit.id === current.unit.id,
        );
        if (candidate) {
          candidate.amount += current.amount;
          return prev;
        } else {
          return [...prev, current];
        }
      }, []);

    setNames(names);
    setRecipeLines(recipeLines);
  }, [week]);

  return {names, recipeLines};
};

export default useWeek;
