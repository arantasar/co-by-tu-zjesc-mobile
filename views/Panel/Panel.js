import React from 'react';
import {ScrollView, View, Text} from 'react-native';

const Panel = () => (
  <ScrollView>
    <View>
      <Text>Twój profil</Text>
      <Text>Moje przepisy</Text>
      <Text>Dodaj przepis</Text>
      <Text>Ulubione</Text>
      <Text>Edytuj profil</Text>
      <Text>Wyloguj</Text>
    </View>
  </ScrollView>
);

export default Panel;
