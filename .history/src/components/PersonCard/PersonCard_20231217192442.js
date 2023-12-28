/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './PersonCard.Style';
import {IMAGE_POSTER_URL} from '../../config';

const PersonCard = ({person}) => {
  return (
    <View style={styles.container}>
      <View style={styles.button_container}>
        <Image
          source={{uri: `${IMAGE_POSTER_URL}${person.profile_path}`}}
          style={styles.image}
        />
        <Text style={styles.bio} >
            {person.biography}
        </Text>
      </View>
  </View>
  );
};

export default PersonCard;
