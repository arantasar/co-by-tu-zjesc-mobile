import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Panel from '../views/Panel/Panel';
import UserRecipes from '../views/UserRecipes/UserRecipes';
import Favourites from '../views/Favourites/Favourites';
import EditProfile from '../views/EditProfile/EditProfile';
import CommonNavigation from './CommonNavigation';
import AddIngredients from '../views/AddRecipe/AddIngredients/AddIngredients';
import AddAmount from '../views/AddRecipe/AddAmount/AddAmount';
import Home from '../views/Home/Home';
import AddDetails from '../views/AddRecipe/AddDetails/AddDetails';

const Stack = createStackNavigator();

const UserNavigation = () => {
  const common = CommonNavigation(Stack);

  return (
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
        name="addIngredients"
        component={AddIngredients}
        options={{title: 'Składniki'}}
      />
      <Stack.Screen
        name="addAmount"
        component={AddAmount}
        options={({route}) => ({title: route.params.ingredient.name})}
      />
      <Stack.Screen
        name="addDetails"
        component={AddDetails}
        options={{title: 'Szczegóły'}}
      />
      <Stack.Screen
        name="addPhoto"
        component={Home}
        options={{title: 'Zdjęcie'}}
      />
      <Stack.Screen
        name="addSummary"
        component={Home}
        options={{title: 'Podsumowanie'}}
      />
      {common}
    </Stack.Navigator>
  );
};

export default UserNavigation;
