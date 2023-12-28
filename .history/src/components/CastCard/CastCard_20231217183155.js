/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Text,
  ActivityIndicator,
} from 'react-native';
import {GET} from '../../services/Api';
import Styles from './CastCard.Style';
import DetailCard from '../DetailCard';
const TrendingPeople = ({route, navigation}) => {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState();

  useEffect(() => {
    const getPeople = async () => {
      const data = await GET(`/movie/${route.params.movieId}/credits`);
      setPeople(route.isForPage === 'details' ? data.cast : data.crew);
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
          <FlatList
            keyExtractor={item => item.id}
            data={people}
            renderItem={({item}) => (
              <DetailCard
                item={item}
                onPress={() =>
                  navigation.navigate('Home', {
                    movieId: item.id,
                  })
                }
              />
            )}
            horizontal
          />
        </View>
      )}
    </View>
  );
};

export default TrendingPeople;
