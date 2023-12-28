/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Style from './ProfileCard.Style';

const ProfileCard = ({profile, onPress}) => {
  return (
    <View style={Style.container}>
      <View style={Style.inner_container}>
        <Text style={Style.Personal}>Personal Information</Text>
        <View style={Style.align}>
          <Text style={Style.title}>E-Mail: </Text>
          <Text style={Style.content}>{profile.email}</Text>
          <TouchableOpacity style={Style.edit} onPress={onPress}>
            <Text style={Style.edit_word}>Edit</Text>
          </TouchableOpacity>
        </View>
        <View style={Style.align}>
          <Text style={Style.title}>Password: </Text>
          <Text style={Style.password}>*******</Text>
          <TouchableOpacity style={Style.edit} onPress={onPress}>
            <Text style={Style.edit_word}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileCard;
