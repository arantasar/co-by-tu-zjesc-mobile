import React from 'react';
import {Text, View, FlatList, Image} from 'react-native';
import styled from 'styled-components';
import useNewestRecipes from '../../hooks/useNewest';
import {COLORS} from '../../styles/variables';
import RecipePreview from './../RecipePreview/RecipePreview';

const DATA = [
  {
    name: 'Pizza',
    id: '1',
  },
  {
    name: 'Spaghetti',
    id: '2',
  },
  {
    name: 'Spaghetti',
    id: '3',
  },
];

const listStyle = {
  paddingLeft: 20,
};

const RecentRecipes = () => {
  const newestRecipes = useNewestRecipes();

  return (
    <>
      <Wrapper>
        <Header>Najnowsze przepisy!</Header>
        <Link>Zobacz więcej &gt;</Link>
      </Wrapper>
      <FlatList
        contentContainerStyle={listStyle}
        horizontal
        data={newestRecipes}
        renderItem={(recipe) => <RecipePreview {...recipe.item} />}
        keyExtractor={(recipe) => recipe.id}
      />
    </>
  );
};

export default RecentRecipes;

const Header = styled(Text)`
  font-weight: bold;
  font-size: 14px;
`;

const Wrapper = styled(View)`
  display: flex;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

const Link = styled(Text)`
  color: ${COLORS.primary};
`;
