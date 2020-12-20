import React, {useContext} from 'react';
import UserContext from './../../context/UserContext';
import {View, Text, Image} from 'react-native';
import styled from 'styled-components';
import {COLORS} from '../../styles/variables';
import userDefault from './../../assets/userDefault.png';

const Profile = () => {
  const {user} = useContext(UserContext);

  const dateCreated = (user && user.dateCreated) || '';
  const day = dateCreated.slice(0, 2);
  const month = dateCreated.slice(3, 5);
  const year = dateCreated.slice(6, 10);
  const accountCreated = new Date(+year, +month - 1, +day);
  const today = new Date();

  const diffTime = Math.abs(+today - +accountCreated);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return (
    <StyledView>
      <PhotoWrapper>
        <StyledImage source={(user && user.photoPath) || userDefault} />
      </PhotoWrapper>
      <View>
        <Header>{user.name}</Header>
        <Stats>
          <View>
            <StyledText>Dni w serwisie</StyledText>
            <StyledText>Dodanych przepisów</StyledText>
            <StyledText>Ulubione przepisy</StyledText>
            <StyledText>Zebrane polubienia</StyledText>
          </View>
          <StatsValues>
            <StyledText>{diffDays}</StyledText>
            <StyledText>{user.recipes.length}</StyledText>
            <StyledText>{user.favourites.length}</StyledText>
            <StyledText>{user.receivedLikes}</StyledText>
          </StatsValues>
        </Stats>
      </View>
    </StyledView>
  );
};
export default Profile;

const StyledView = styled(View)`
  background-color: ${COLORS.primary};
  display: flex;
  flex-direction: row;
  padding: 10px;
`;

const PhotoWrapper = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
`;

const Stats = styled(View)`
  display: flex;
  flex-direction: row;
`;

const StatsValues = styled(View)`
  margin-left: 20px;
`;

const StyledImage = styled(Image)`
  border-radius: 50px;
  width: 100px;
  height: 100px;
`;

const StyledText = styled(Text)`
  color: white;
`;

const Header = styled(Text)`
  font-size: 18px;
  color: white;
  font-weight: bold;
  margin-bottom: 2px;
`;

const Email = styled(Text)`
  margin-bottom: 2px;
  color: white;
`;
