/* eslint-disable prettier/prettier */
import React from 'react';
import Style from './AppBar.style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
const AppBar = props => {
  return (
    <View style={Style.container}>
      <TouchableWithoutFeedback onPress={props.handleHome} >
        <Text style={Style.title}>Share Movie</Text>
      </TouchableWithoutFeedback>
      <Icon name="rocket" size={30} color="#900" />
      <View style={Style.align}>
        <TouchableOpacity style={Style.button} onPress={props.handleProfile}>
          <Text style={Style.word}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppBar;
