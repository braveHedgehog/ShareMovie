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
const TrendingPeople = ({squad,navigation}) => {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState();

  useEffect(() => {
    const getPeople = async () => {
      const data = await GET(squad.url);
      setPeople(squad.isForPage === 'details' ? data.cast : data.crew);
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
          <Text style={Styles.heading}>{squad.title}</Text>
          <FlatList
            keyExtractor={item => item.id}
            data={people}
            renderItem={({item}) => (
              <DetailCard
                item={item}
                onPress={() =>
                  navigation('Home', {
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
