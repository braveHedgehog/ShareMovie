/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './PersonCard.Style';
import {IMAGE_POSTER_URL} from '../../config';

const PersonCard = ({person, onPress}) => {
  return (
    <View style={styles.container}>
    <TouchableWithoutFeedback  onPress={onPress}>
      <View style={styles.button_container}>
        <Image
          source={{uri: `${IMAGE_POSTER_URL}${person.profile_path}`}}
          style={styles.image}
        />
      </View>
    </TouchableWithoutFeedback>
  </View>
  );
};

export default PersonCard;
