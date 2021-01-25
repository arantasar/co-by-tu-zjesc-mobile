import React, {useContext, useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import userContext from '../../context/UserContext';
import axios from './../../axios/';
import styled from 'styled-components';
import {COLORS} from '../../styles/variables';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import useWeek from '../../hooks/useWeek';

const MyWeek = () => {
  const {setWeek, token} = useContext(userContext);
  const [excluded, setExcluded] = useState([]);
  const {names, recipeLines} = useWeek();

  const comparator = (a, b) => {
    if (excluded.includes(a.id) && !excluded.includes(b.id)) {
      return 1;
    } else if (!excluded.includes(a.id) && excluded.includes(b.id)) {
      return -1;
    } else {
      return 0;
    }
  };

  const toggleExcluded = (id) => {
    if (excluded.includes(id)) {
      setExcluded((prev) => prev.filter((item) => item !== id));
    } else {
      setExcluded((prev) => [...prev, id]);
    }
  };

  const deleteRecipe = (itemId) => {
    axios
      .delete(`/api/users/deleteweek/${itemId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        getRecipes();
      });
  };

  const getRecipes = () =>
    axios
      .post('/api/users/getweek', null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setWeek(res.data);
      });

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <View style={{flex: 1}}>
      <View style={{height: 200}}>
        <FlatList
          stickyHeaderIndices={[0]}
          ListHeaderComponent={
            <Header>
              <HeaderText>Przepisy na liście</HeaderText>
            </Header>
          }
          data={names}
          keyExtractor={(item) => item.itemId}
          renderItem={({item}) => (
            <View>
              <SmallHeader>
                <SmallHeaderText>{item.name}</SmallHeaderText>
                <FontAwesomeIcon
                  icon={faTrash}
                  onPress={() => {
                    deleteRecipe(item.itemId);
                  }}
                />
              </SmallHeader>
            </View>
          )}
        />
      </View>
      <FlatList
        stickyHeaderIndices={[0]}
        data={recipeLines.sort(comparator)}
        ListHeaderComponent={
          <Header>
            <HeaderText>Lista zakupów</HeaderText>
          </Header>
        }
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({item}) => (
          <View>
            <IngredientItem
              excluded={excluded.includes(item.id)}
              onPress={() => {
                toggleExcluded(item.id);
              }}>
              <Photo source={{uri: 'https://picsum.photos/50'}} />
              <Name>{item.ingredient.name}</Name>
              <Amount>
                {item.amount} x {item.unit.name}
              </Amount>
            </IngredientItem>
          </View>
        )}
      />
    </View>
  );
};

export default MyWeek;

const SmallHeader = styled(View)`
  flex-direction: row;
  padding: 5px 20px;
  border: 1px solid ${COLORS.primary};
  background-color: white;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

const SmallHeaderText = styled(Text)`
  font-weight: bold;
  font-size: 18px;
  color: black;
`;

const Header = styled(View)`
  flex-direction: row;
  padding: 10px 20px;
  background-color: green;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled(Text)`
  font-weight: bold;
  font-size: 20px;
  color: white;
`;

const IngredientItem = styled(TouchableOpacity)`
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid ${COLORS.primary};
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
  opacity: ${(props) => (props.excluded ? '0.5' : '1')};
`;

const Photo = styled(Image)`
  width: 50px;
  height: 50px;
`;

const Name = styled(Text)`
  text-align: center;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Amount = styled(Text)`
  text-align: center;
`;
