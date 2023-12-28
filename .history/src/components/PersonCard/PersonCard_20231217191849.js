/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './PersonCard.Style';

const PersonCard = ({person}) => {
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

export default PersonCard;
