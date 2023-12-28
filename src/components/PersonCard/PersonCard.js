/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './PersonCard.Style';
import {IMAGE_POSTER_URL} from '../../config';

const PersonCard = ({person}) => {
  return (
    <View style={styles.container}>
        <Image
          source={{uri: `${IMAGE_POSTER_URL}${person.profile_path}`}}
          style={styles.image}
        />
        <Text style={styles.name} >
            {person.name}
        </Text>
        <Text style={styles.bio} >
            {person.biography}
        </Text>
  </View>
  );
};

export default PersonCard;
