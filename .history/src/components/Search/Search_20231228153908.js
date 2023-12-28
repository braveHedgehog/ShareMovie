/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {TouchableWithoutFeedback, View, Image, Text, FlatList} from 'react-native';
import styles from '../../Pages/Home/Home.Style';
import {GET} from '../../services/Api';
import {IMAGE_POSTER_URL} from '../../config';

const Search = ({navigation}) => {
  const [searchMovie, setSearchMovie] = useState([]);
  const [searchImage, setSearchImage] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const response = await GET('/search/movie');
      setSearchMovie(response.results);
      const images = response.results.map(
        data => `${IMAGE_POSTER_URL}${data.poster_path}`,
      );
      let backImages = [];
      for (let i = 0; i < 10; ++i) {
        backImages = [...backImages, images[i]];
      }

      setSearchImage(backImages);
    };

    getMovies();
  }, []);
  return (
    <View style={style.container}>
      <FlatList
        keyExtractor={item => item.id.toString()}
        style={styles.list}
        horizontal={true}
        data={searchMovie}
        renderItem={({item}) => (
          <Search
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
export default Search;
