import React from 'react';
import Header from './../Header/Header';
import Search from '../Search/Search';

const IngredientsHeader = ({value, onChangeText}) => (
  <>
    <Header text={'Wybierz składniki'} />
    <Search onChangeText={(text) => onChangeText(text)} value={value} />
  </>
);

export default IngredientsHeader;
