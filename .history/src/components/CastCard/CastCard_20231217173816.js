/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, Image, FlatList, Text, ActivityIndicator, TouchableWithoutFeedback} from 'react-native';
import {IMAGE_POSTER_URL} from '../../config';
import {GET} from '../../services/Api';
import Styles from './CastCard.Style';
const TrendingPeople = props => {
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
    <View>
      {loading ? (
        <ActivityIndicator size="large" color={'white'} />
      ) : (
        <View>
          <Text style={Styles.heading}>{props.title}</Text>
          <FlatList
            keyExtractor={item => item.id}
            data={people}
            renderItem={displayPeople}
            horizontal
          />
        </View>
      )}
    </View>
  );
};
const displayPeople = ({item,navigation}) => {
  return (
    <View style={Styles.trendingPeopleContainer}>
      <TouchableWithoutFeedback onPress={(
        () =>
        navigation.navigate('MovieDetail')
      )} >
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
