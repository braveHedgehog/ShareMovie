/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {ScrollView, Text, FlatList} from 'react-native';
import {GET} from '../../services/Api';
import {IMAGE_POSTER_URL} from '../../config';
import MovieCard from '../../components/MovieCard/MovieCard';
import styles from './Home.Style';
import AppBar from '../../components/AppBar';
import CommentCard from '../../components/Comment/Comment';
import comment_data from '../../comments.json';
import Search from '../../components/Search';

const Home = ({navigation}) => {
  const [movies, setMovies] = useState([]);
  const [image, setImage] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [topRatedImages, setTopRatedImages] = useState([]);
  const [tv, setTv] = useState([]);
  const [imageTV, setImageTV] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [imageNow, setImageNow] = useState([]);

  const [comment, setComment] = useState(comment_data);

  function handleProfile() {
    navigation.navigate('Profile');
  }

  function handleHome() {
    navigation.navigate('Home');
  }

  function handleSearch() {
    navigation.navigate('Search');
  }
  useEffect(() => {
    const getMovies = async () => {
      const response = await GET('/discover/movie');
      setMovies(response.results);
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

  useEffect(() => {
    const getMovies = async () => {
      const response = await GET('/discover/tv');
      setTv(response.results);
      const images = response.results.map(
        data => `${IMAGE_POSTER_URL}${data.poster_path}`,
      );
      let backImages = [];
      for (let i = 0; i < 10; ++i) {
        backImages = [...backImages, images[i]];
      }

      setImageTV(backImages);
    };

    getMovies();
  }, []);

  useEffect(() => {
    const getMovies = async () => {
      const response = await GET('/movie/top_rated');
      setTopRatedMovies(response.results);
      const images = response.results.map(
        data => `${IMAGE_POSTER_URL}${data.poster_path}`,
      );
      let backImages = [];
      for (let i = 0; i < 10; ++i) {
        backImages = [...backImages, images[i]];
      }

      setTopRatedImages(backImages);
    };

    getMovies();
  }, []);
  useEffect(() => {
    const getMovies = async () => {
      const response = await GET('/movie/now_playing');
      setNowPlaying(response.results);
      const images = response.results.map(
        data => `${IMAGE_POSTER_URL}${data.poster_path}`,
      );
      let backImages = [];
      for (let i = 0; i < 10; ++i) {
        backImages = [...backImages, images[i]];
      }

      setImageNow(backImages);
    };

    getMovies();
  }, []);
  return (
    <ScrollView style={styles.container}>
      <AppBar
        handleProfile={handleProfile}
        handleHome={handleHome}
        handleSearch={handleSearch}
      />
      <Text style={styles.title}>Popular Movies This Week</Text>
      <FlatList
        style={styles.list}
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

      <Text style={styles.title}>Now Playing</Text>
      <FlatList
        keyExtractor={item => item.id.toString()}
        style={styles.list}
        horizontal={true}
        data={nowPlaying}
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
      <Text style={styles.title}>Popular TV This Week</Text>
      <FlatList
        keyExtractor={item => item.id.toString()}
        style={styles.list}
        horizontal={true}
        data={tv}
        renderItem={({item}) => (
          <MovieCard
            images={item}
            onPress={() =>
              navigation.navigate('TVDetail', {
                movieId: item.id,
              })
            }
          />
        )}
      />
      <Text style={styles.title}>Top Rated Movie</Text>
      <FlatList
        keyExtractor={item => item.id.toString()}
        style={styles.list}
        horizontal={true}
        data={topRatedMovies}
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
      <Text style={styles.title}>Comments</Text>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={comment}
        renderItem={({item}) => (
          <CommentCard comments={item} ItemSeparatorComponent={setComment} />
        )}
      />
    </ScrollView>
  );
};

export default Home;
