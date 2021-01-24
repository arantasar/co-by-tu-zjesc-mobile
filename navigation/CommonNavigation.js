import React from 'react';
import Recipe from '../views/Recipe/Recipe';
import Shopping from '../views/ShoppingList/ShoppingList';

const CommonNavigation = (Stack) => [
  <Stack.Screen
    name="recipe"
    key={'recipe'}
    component={Recipe}
    options={({route}) => ({title: route.params.name})}
  />,
  <Stack.Screen
    name="shopping"
    key={'shopping'}
    component={Shopping}
    options={({route}) => ({title: route.params.name})}
  />,
];

export default CommonNavigation;
