import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Panel from '../views/Panel/Panel';
import UserRecipes from '../views/UserRecipes/UserRecipes';
import AddRecipe from '../views/AddRecipe/AddRecipe';
import Favourites from '../views/Favourites/Favourites';
import EditProfile from '../views/EditProfile/EditProfile';
import Recipe from '../views/Recipe/Recipe';

const Stack = createStackNavigator();

const UserNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="panel"
      component={Panel}
      options={{title: 'Mój profil'}}
    />
    <Stack.Screen
      name="userRecipes"
      component={UserRecipes}
      options={{title: 'Moje przepisy'}}
    />
    <Stack.Screen
      name="addRecipe"
      component={AddRecipe}
      options={{title: 'Dodaj przepis'}}
    />
    <Stack.Screen
      name="favourites"
      component={Favourites}
      options={{title: 'Ulubione'}}
    />
    <Stack.Screen
      name="editProfile"
      component={EditProfile}
      options={{title: 'Edytuj'}}
    />
    <Stack.Screen
      name="recipe"
      component={Recipe}
      options={({route}) => ({title: route.params.name})}
    />
  </Stack.Navigator>
);

export default UserNavigation;
