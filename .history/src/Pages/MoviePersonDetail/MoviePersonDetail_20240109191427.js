/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, ActivityIndicator, Image, TouchableOpacity} from 'react-native';
import {GET} from '../../services/Api';
import {IMAGE_POSTER_URL} from '../../config';
import Styles from './MoviePersonDetail.style';
import CastCard from '../../components/CastCard';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import ContentInputModal from '../../components/Modal/ContentImputModal/ContentInputModal';
import {firebase} from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {useSelector, useDispatch} from 'react-redux';
import {
  addFavorite,
  removeFavorite,
} from '../../context/FavoriteMovies/FavoriteSlice';

const MoviePersonDetail = props => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState();
  const [inputModalVisible, setInputModalVisible] = useState(false);
  
  useEffect(() => {
    const getDetails = async () => {
      const data = await GET(`/movie/${props.route.params.movieId}`);
      setDetails(data);
      setLoading(false);
    };

    getDetails();
  }, []);
  const favoriteMovie = useSelector(state => state.favorites.favoriteList);
  const dispatch = useDispatch();
  const movie = props.route.params;
  const setFavoriteState = () => {
    if (favoriteMovie.includes(movie)) {
      dispatch(removeFavorite(movie.id));
    } else {
      dispatch(addFavorite(movie));
    }
  };
  function handleInputToggle() {
    setInputModalVisible(!inputModalVisible);
  }

  function handleSendContent(content) {
    handleInputToggle();
    sendContent(content);
  }

  function sendContent(content) {
    const userMail = auth().currentUser.email;
    const contentObject = {
      text: content,
      username: userMail.split('@')[0],
      date: new Date().toISOString(),
    };
    console.log(contentObject);
  }

  const getGenre = () => {
    return details.genres.map(genre => (
      <View style={Styles.genreContainer}>
        <Text style={Styles.genre}>{genre.name}</Text>
      </View>
    ));
  };

  return (
    <ScrollView style={Styles.sectionBg}>
      {loading ? (
        <ActivityIndicator size="large" color={'white'} />
      ) : (
        <View>
          <View>
            <Image
              source={{uri: `${IMAGE_POSTER_URL}${details.backdrop_path}`}}
              style={Styles.imageBg}
            />
          </View>
          <Text style={Styles.detailsMovieTitle}>{details.original_title}</Text>
          <Text style={Styles.heading}>OVERVIEW</Text>
          <Text style={Styles.tagline}>{details.tagline}</Text>
          <Text style={Styles.overview}>{details.overview}</Text>
          <View style={Styles.detailsContainer}>
            <View>
              <Text style={Styles.heading}>BUDGET</Text>
              <Text style={Styles.details}>$ {details.budget}</Text>
            </View>

            <View>
              <Text style={Styles.heading}>DURATION</Text>
              <Text style={Styles.details}>{details.runtime} min.</Text>
            </View>

            <View>
              <Text style={Styles.heading}>RELEASE DATE</Text>
              <Text style={Styles.details}>{details.release_date}</Text>
            </View>
          </View>
          <Text style={Styles.heading}>GENRE</Text>
          <View style={Styles.genreDetail}>
            {getGenre()}
            <TouchableOpacity
              style={Styles.button}
              onPress={() => setFavoriteState()}>
              <Text style={Styles.word}>Favorites</Text>
            </TouchableOpacity>
          </View>
          <CastCard
            title="Cast"
            url={`/movie/${props.route.params.movieId}/credits`}
            isForPage="details"
          />
          <CastCard
            title="Crew"
            url={`/movie/${props.route.params.movieId}/credits`}
            isForPage
          />
          <FloatingButton handleFloatingSubmit={handleInputToggle} />
          <ContentInputModal
            visible={inputModalVisible}
            onClose={handleInputToggle}
            onSend={handleSendContent}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default MoviePersonDetail;
