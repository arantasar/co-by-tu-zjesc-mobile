import React, {createContext} from 'react';

const context = {
  isUserLogged: false,
  user: {
    id: '',
    email: '',
    name: '',
    description: '',
    lastLogin: '',
    role: '',
    favourites: [],
    recipes: [],
    photoPath: '',
    daysInService: 0,
    receivedLikes: 0,
  },
  selectedIngredients: [],
  searchedIngredients: [],
  newRecipe: {
    name: '',
    description: '',
    categories: [],
    diets: [],
    prepareTime: 1,
    size: 1,
  },
  week: [],
  token: '',
  resetNewRecipe: () => {},
  login: () => {},
  logout: () => {},
  updateUser: () => {},
  setUser: () => {},
  setToken: () => {},
  setWeek: () => {},
  setSelectedIngredients: () => {},
  setSearchedIngredients: () => {},
};

const userContext = createContext(context);

export default userContext;
