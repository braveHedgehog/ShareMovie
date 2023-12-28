/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView} from 'react-native';
import AppBar from '../../components/AppBar';
import {useNavigation} from '@react-navigation/native';
import PersonMovieCard from '../../components/PersonMovieCard';

const PersonMovie = props => {
  const navigation = useNavigation();
  function handleProfile() {
    navigation.navigate('Profile');
  }
  return (
    <ScrollView>
      <AppBar handleProfile={handleProfile} />
      <PersonMovieCard isForPage="details" url={`person/${props.route.params.personId}/movie_credits`} />
    </ScrollView>
  );
};

export default PersonMovie;
