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
const TrendingPeople = props => {
  function goPeople() {
    props.navigation.navigate('MovieDetail');
  }
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState();

  useEffect(() => {
    const getPeople = async () => {
      const data = await GET(props.url);
      setPeople(props.isForPage === 'details' ? data.cast : data.crew);
      setLoading(false);
    };

    getPeople();
  }, []);

  return (
    <View style={Styles.trendingPeopleContainer}>
      <TouchableWithoutFeedback onPress={goPeople}>
        <Image
          source={{uri: `${IMAGE_POSTER_URL}${props.profile_path}`}}
          style={Styles.trendingPeopleImage}
        />
      </TouchableWithoutFeedback>
      <Text style={Styles.trendingPeopleName}>{props.name}</Text>
      <Text style={Styles.trendingPeopleCharacter}>{props.character}</Text>
      <Text style={Styles.trendingPeopleCharacter}>{props.job}</Text>
    </View>
  );
};

export default TrendingPeople;
