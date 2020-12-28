import React from 'react';
import {Text, View, FlatList, Image} from 'react-native';
import styled from 'styled-components';
import useMostPopular from '../../hooks/usePopular';
import {COLORS} from '../../styles/variables';
import RecipePreview from './../RecipePreview/RecipePreview';

const listStyle = {
  paddingLeft: 20,
};

const BestRecipes = () => {
  const mostPopular = useMostPopular();

  return (
    <>
      <Wrapper>
        <Header>Najpopularniejsze przepisy!</Header>
        <Link>Zobacz więcej &gt;</Link>
      </Wrapper>
      <FlatList
        contentContainerStyle={listStyle}
        horizontal
        data={mostPopular}
        renderItem={(recipe) => <RecipePreview {...recipe.item} />}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

export default BestRecipes;

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
