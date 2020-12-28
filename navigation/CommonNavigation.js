import React from 'react';
import Recipe from '../views/Recipe/Recipe';

const CommonNavigation = (Stack) => [
  <Stack.Screen
    name="recipe"
    key={'recipe'}
    component={Recipe}
    options={({route}) => ({title: route.params.name})}
  />,
];

export default CommonNavigation;
