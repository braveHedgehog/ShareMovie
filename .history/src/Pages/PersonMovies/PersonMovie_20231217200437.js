/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {ScrollView, Text, FlatList} from 'react-native';
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
      <PersonMovieCard isForPage="details" />
    </ScrollView>
  );
};

export default PersonMovie;
