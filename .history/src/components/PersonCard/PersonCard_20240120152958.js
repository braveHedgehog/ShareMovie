/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './PersonCard.Style';
import {IMAGE_POSTER_URL} from '../../config';

const PersonCard = ({item}) => {
  return (
    <View style={styles.container}>
        <Image
          source={{uri: `${IMAGE_POSTER_URL}${item.profile_path}`}}
          style={styles.image}
        />
        <Text style={styles.name} >
            {item.name}
        </Text>
        <Text style={styles.bio} >
            {item.biography}
        </Text>
  </View>
  );
};

export default PersonCard;
