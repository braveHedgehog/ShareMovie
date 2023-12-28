/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import AppBar from '../../components/AppBar';
import {useNavigation} from '@react-navigation/native';
import PersonMovieCard from '../../components/PersonMovieCard';
import style from './PersonMovies.Style';

const PersonMovie = props => {
  const navigation = useNavigation();
  function handleProfile() {
    navigation.navigate('Profile');
  }
  return (
    <View style={style.container}>
      <AppBar handleProfile={handleProfile} />
      <PersonMovieCard
        isForPage="details"
        url={`person/${props.route.params.personId}/movie_credits`}
      />
    </View>
  );
};

export default PersonMovie;
