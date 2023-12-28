/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {GET} from '../../services/Api';
import {IMAGE_POSTER_URL} from '../../config';
import MovieCard from '../MovieCard';
import styles from './PersonMovieCard.style';
import {useNavigation} from '@react-navigation/native';

const PersonMovie = props => {
  const [movies, setMovies] = useState([]);
  const [image, setImage] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    const getMovies = async () => {
      const response = await GET(
        props.url,
      );
      setMovies(props.isForPage === 'details' ? response.cast : response.crew);
      const images = response.results.map(
        data => `${IMAGE_POSTER_URL}${data.poster_path}`,
      );
      let backImages = [];
      for (let i = 0; i < 10; ++i) {
        backImages = [...backImages, images[i]];
      }

      setImage(backImages);
    };

    getMovies();
  }, []);
  return (
    <View>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={movies}
        renderItem={({item}) => (
          <MovieCard
            images={item}
            onPress={() =>
              navigation.navigate('MovieDetail', {
                movieId: item.id,
              })
            }
          />
        )}
      />
    </View>
  );
};

export default PersonMovie;
