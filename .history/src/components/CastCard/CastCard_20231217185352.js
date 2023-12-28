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
const TrendingPeople = route => {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState();

  useEffect(() => {
    const getPeople = async () => {
      const data = await GET(route.url);
      setPeople(route.isForPage === 'details' ? data.cast : data.crew);
      setLoading(false);
    };

    getPeople();
  }, []);
  function goPeople(){
    console.log('yoruldummaq');
  }
  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color={'white'} />
      ) : (
        <View>
          <Text style={Styles.heading}>{route.title}</Text>
          <FlatList
            keyExtractor={item => item.id}
            data={people}
            renderItem={({item}) => (
              <DetailCard
                item={item}
                onPress={goPeople()}
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
