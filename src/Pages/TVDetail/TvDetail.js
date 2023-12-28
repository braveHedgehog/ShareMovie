/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, ActivityIndicator, Image} from 'react-native';
import {GET} from '../../services/Api';
import {IMAGE_POSTER_URL} from '../../config';
import Styles from './TvDetail.Style';
import CastCard from '../../components/CastCard';

const TVDetail = props => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState();

  useEffect(() => {
    const getDetails = async () => {
      const data = await GET(`/tv/${props.route.params.movieId}`);
      setDetails(data);
      setLoading(false);
    };

    getDetails();
  }, []);

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
          <Text style={Styles.detailsMovieTitle}>{details.name}</Text>
          <Text style={Styles.heading}>OVERVIEW</Text>
          <Text style={Styles.overview}>{details.overview}</Text>
          <View style={Styles.detailsContainer}>
            <View>
              <Text style={Styles.heading}>First Air Date</Text>
              <Text style={Styles.details}>{details.first_air_date}</Text>
            </View>

            <View>
              <Text style={Styles.heading}>Episode Run Time</Text>
              <Text style={Styles.details}>{details.episode_run_time} min.</Text>
            </View>
          </View>

          <Text style={Styles.heading}>GENRE</Text>
          <View style={Styles.genreDetail}>
            {getGenre()}
          </View>
          <CastCard
            title="Cast"
            url={`/tv/${props.route.params.movieId}/credits`}
            isForPage="details"
          />
          <CastCard
            title="Crew"
            url={`/tv/${props.route.params.movieId}/credits`}
            isForPage
          />
        </View>
      )}
    </ScrollView>
  );
};

export default TVDetail;
