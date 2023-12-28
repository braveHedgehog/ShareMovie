/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  FlatList,
  Text,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from 'react-native';
import {IMAGE_POSTER_URL} from '../../config';
import {GET} from '../../services/Api';
import Styles from './CastCard.Style';


const TrendingPeople = ({item}) => {

  

  return (
    <View style={Styles.trendingPeopleContainer}>
    <Image
      source={{uri: `${IMAGE_POSTER_URL}${item.profile_path}`}}
      style={Styles.trendingPeopleImage}
    />
    <Text style={Styles.trendingPeopleName}>{item.name}</Text>
    <Text style={Styles.trendingPeopleCharacter}>{item.character}</Text>
    <Text style={Styles.trendingPeopleCharacter}>{item.job}</Text>
  </View>
  );
}


export default TrendingPeople;
