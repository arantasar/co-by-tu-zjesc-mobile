import React from 'react';
import styled from 'styled-components';
import {TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';
import {COLORS} from './../../../styles/variables';

const AdminIcons = () => (
  <StyledView>
    <Icon
      style={{backgroundColor: 'white'}}
      onPress={() => console.log('edit')}>
      <FontAwesomeIcon icon={faEdit} color={COLORS.primary} />
    </Icon>
    <Icon
      style={{backgroundColor: COLORS.primary}}
      onPress={() => console.log('delete')}>
      <FontAwesomeIcon icon={faTrash} color={'white'} />
    </Icon>
  </StyledView>
);

export default AdminIcons;

const StyledView = styled(View)`
  flex-direction: row;
`;

const Icon = styled(TouchableOpacity)`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;
