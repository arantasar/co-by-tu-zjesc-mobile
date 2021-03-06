import React, {useState} from 'react';
import UserContext from './UserContext';

const UserContextProvider = ({children}) => {
  const [token, setToken] = useState('');
  const [user, setUser] = useState(null);
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [week, setWeek] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [searchedIngredients, setSearchedIngredients] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    name: '',
    description: '',
    categories: [],
    diets: [],
    size: '',
    prepareTime: '',
  });

  const updateUser = ({description, email, photoPath, ...rest}) => {
    setUser((prev) => {
      return prev
        ? {
            ...prev,
            ...rest,
            description,
            email,
            photoPath,
          }
        : null;
    });
  };

  const resetNewRecipe = () => {
    setSelectedIngredients([]);
    setNewRecipe({
      id: '',
      name: '',
      description: '',
      categories: [],
      diets: [],
      size: '',
      prepareTime: '',
      photoPath: '',
    });
  };

  const login = (user, token) => {
    setUser(user);
    setToken(token);
    setIsUserLogged(true);
  };

  const logout = () => {
    setUser(null);
    setToken('');
    setIsUserLogged(false);
  };

  const value = {
    isUserLogged,
    user,
    login,
    logout,
    token,
    updateUser,
    setToken,
    setUser,
    week,
    setWeek,
    selectedIngredients,
    setSelectedIngredients,
    newRecipe,
    setNewRecipe,
    resetNewRecipe,
    searchedIngredients,
    setSearchedIngredients,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
