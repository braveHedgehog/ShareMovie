/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Style from './Profile.Style';
import auth from '@react-native-firebase/auth';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import { useSelector } from 'react-redux';
import MovieCard from '../../components/MovieCard/MovieCard';
import styles from './FavoritedPage.styles';

const Profile = ({navigation}) => {
  function handleLogOut() {
    auth().signOut();
    navigation.navigate('Home');
  }

  function handleEdit() {
    navigation.navigate('Edit');
  }

  return (
    <View style={Style.container}>
      <ProfileCard profile={auth().currentUser} onPress={handleEdit} />
      <TouchableOpacity style={Style.button} onPress={handleLogOut}>
          <Text style={Style.word}>Log Out</Text>
        </TouchableOpacity>
    </View>
  );
};

export default Profile;
