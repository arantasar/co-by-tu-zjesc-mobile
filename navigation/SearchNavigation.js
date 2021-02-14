import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Ingredients from './../views/Search/Ingredients/Ingredients';
import Details from '../views/Search/Details/Details';
import Results from '../views/Search/Results/Results';
import CommonNavigation from './CommonNavigation';

const Stack = createStackNavigator();

const SearchNavigation = () => {
  const common = CommonNavigation(Stack);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="search"
        options={{title: 'Szukaj'}}
        component={Ingredients}
      />
      <Stack.Screen
        name="searchDetails"
        options={{title: 'Szukaj'}}
        component={Details}
      />
      <Stack.Screen
        name="searchResults"
        options={{title: 'Szukaj'}}
        component={Results}
      />
      {common}
    </Stack.Navigator>
  );
};

export default SearchNavigation;
