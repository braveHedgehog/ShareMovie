/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import {IMAGE_POSTER_URL} from '../../config';
import Styles from './CastCard.Style';
const TrendingPeople = ({item, onPress}) => {
  return (
    <View style={Styles.trendingPeopleContainer}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Image
          source={{uri: `${IMAGE_POSTER_URL}${item.profile_path}`}}
          style={Styles.trendingPeopleImage}
        />
      </TouchableWithoutFeedback>
      <Text style={Styles.trendingPeopleName}>{item.name}</Text>
      <Text style={Styles.trendingPeopleCharacter}>{item.character}</Text>
      <Text style={Styles.trendingPeopleCharacter}>{item.job}</Text>
    </View>
  );
};

export default TrendingPeople;
