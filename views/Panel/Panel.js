import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import Profile from './Profile';

const Panel = () => (
  <ScrollView>
    <View>
      <Profile />
      <Text>Moje przepisy</Text>
      <Text>Dodaj przepis</Text>
      <Text>Ulubione</Text>
      <Text>Edytuj profil</Text>
      <Text>Wyloguj</Text>
    </View>
  </ScrollView>
);

export default Panel;
