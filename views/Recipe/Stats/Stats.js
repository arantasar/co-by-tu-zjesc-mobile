import React, {useContext} from 'react';
import styled from 'styled-components';
import {View, Text, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEye, faHeart, faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import userContext from '../../../context/UserContext';
import axios from '../../../axios/';

const Stats = ({inFavourite, likes, viewCounter, recipeId, refresh}) => {
  const ctx = useContext(userContext);
  const heartColor =
    ctx.user && ctx.user.favourites.map((fav) => fav.id).includes(recipeId)
      ? 'red'
      : '#FF9689';

  const iconClickHandler = (icon) => {
    let url = '';
    if (icon === 'favourites') {
      url = '/api/recipes/favourites/';
    } else if (icon === 'likes') {
      url = '/api/recipes/likes/';
    }

    if (icon === 'likes' || (icon === 'favourites' && ctx.isUserLogged)) {
      axios
        .post(
          url,
          {id: recipeId},
          {
            headers: {
              Authorization: `Bearer ${ctx.token}`,
            },
          },
        )
        .then((res) => {
          if (icon === 'favourites') {
            refresh(res.data.recipe, res.data.user);
          } else if (icon === 'likes') {
            refresh(res.data);
          }
        });
    }
  };

  return (
    <StyledStats>
      <StyledStat>
        <FontAwesomeIcon icon={faEye} />
        <Value>{viewCounter}</Value>
      </StyledStat>
      <StyledStat onPress={() => iconClickHandler('likes')}>
        <FontAwesomeIcon icon={faThumbsUp} color={'blue'} />
        <Value>{likes}</Value>
      </StyledStat>
      <StyledStat onPress={() => iconClickHandler('favourites')}>
        <FontAwesomeIcon icon={faHeart} color={heartColor} />
        <Value>{inFavourite}</Value>
      </StyledStat>
    </StyledStats>
  );
};
export default Stats;

const StyledStats = styled(View)`
  background-color: white;
  justify-content: space-around;
  flex-direction: row;
  padding: 5px 10px 15px 10px;
`;

const Value = styled(Text)`
  margin: 0 15px 0 5px;
`;

const StyledStat = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
