/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableWithoutFeedback, View, Image} from 'react-native';
import styles from './MovieCard.Style';
import {IMAGE_POSTER_URL} from '../../config';

const MovieCard = ({onPress, images}) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback  onPress={onPress}>
        <View style={styles.button_container}>
          <Image
            source={{uri: `${IMAGE_POSTER_URL}${images.poster_path}`}}
            style={styles.image}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
export default MovieCard;
