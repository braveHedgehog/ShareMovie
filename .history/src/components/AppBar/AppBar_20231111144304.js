/* eslint-disable prettier/prettier */
import React from 'react';
import Style from './AppBar.style';
import {View, Text, TouchableOpacity} from 'react-native';
const AppBar = props => {
  return (
    <View style={Style.container}>
      <Text style={Style.title}>Share Movie</Text>
      <View style={Style.align}>
        <TouchableOpacity style={Style.button} onPress={props.handleProfile}>
          <Text style={Style.word}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppBar;
