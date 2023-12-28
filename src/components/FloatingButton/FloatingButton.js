/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import style from './FloatingButton.style';
//import Icon from 'react-native-vector-icons';

const FloatingButton = ({handleFloatingSubmit}) => {
  return (
    <TouchableOpacity style={style.container} onPress={handleFloatingSubmit}>
      <Text style={style.word}>Click</Text>
    </TouchableOpacity>
  );
};

export default FloatingButton;
