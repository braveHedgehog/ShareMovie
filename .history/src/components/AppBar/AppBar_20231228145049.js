/* eslint-disable prettier/prettier */
import React from 'react';
import Style from './AppBar.style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
const AppBar = props => {
  const icon = <FontAwesome5 name={'comments'} />;
  return (
    <View style={Style.container}>
      <TouchableWithoutFeedback onPress={props.handleHome} >
        <Text style={Style.title}>Share Movie</Text>
      </TouchableWithoutFeedback>
      <View style={Style.align}>
      <icon />
        <TouchableOpacity style={Style.button} onPress={props.handleProfile}>
          <Text style={Style.word}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppBar;
