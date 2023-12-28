/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {ScrollView, Text, FlatList} from 'react-native';
import {GET} from '../../services/Api';
import {IMAGE_POSTER_URL} from '../../config';
import MovieCard from '../../components/MovieCard/MovieCard';
import styles from './PersonMovies.Style';
import AppBar from '../../components/AppBar';
import {useNavigation} from '@react-navigation/native';

const PersonMovie = props => {
  const [movies, setMovies] = useState([]);
  const [image, setImage] = useState([]);
  const navigation = useNavigation();
  function handleProfile() {
    navigation.navigate('Profile');
  }
  useEffect(() => {
    const getMovies = async () => {
      const response = await GET(
        `person/${props.route.params.personId}/movie_credits`,
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
console.log(movies);
  return (
    <ScrollView>
      <AppBar handleProfile={handleProfile} />
      <FlatList
        keyExtractor={item => item.id.toString()}
        horizontal={true}
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
    </ScrollView>
  );
};

export default PersonMovie;
