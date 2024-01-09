/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import {IMAGE_POSTER_URL} from '../../config';
import Styles from './PeopleJobCard.Style';
const PeopleJobCard = ({item, onPress}) => {
  return (
    <View style={Styles.trendingPeopleContainer}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Image
          source={{uri: `${IMAGE_POSTER_URL}${item.poster_path}`}}
          style={Styles.trendingPeopleImage}
        />
      </TouchableWithoutFeedback>
      <Text style={Styles.name} >
            {item.name}
        </Text>
        <Text style={Styles.bio} >
            {item.biography}
        </Text>
      <Text style={Styles.trendingPeopleName}>{item.name}</Text>
      <Text style={Styles.trendingPeopleCharacter}>{item.character}</Text>
      <Text style={Styles.trendingPeopleCharacter}>{item.job}</Text>
    </View>
  );
};

export default PeopleJobCard;
