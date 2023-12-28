/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View,
    Image,
    FlatList,
    Text,
    ActivityIndicator,
    TouchableWithoutFeedback,
  } from 'react-native';
  import {IMAGE_POSTER_URL} from '../../config';
  import Styles from './DetailCard.Style';
const DetailCard = ({item}) => {
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
};

export default DetailCard;
