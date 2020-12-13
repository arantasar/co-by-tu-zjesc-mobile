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
  token: '',
  login: () => {},
  logout: () => {},
  updateUser: () => {},
  setUser: () => {},
  setToken: () => {},
};

const userContext = createContext(context);

export default userContext;
