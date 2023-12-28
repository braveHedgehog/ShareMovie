/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableWithoutFeedback, View, Image, Text} from 'react-native';
import style from './Search.style';
import {IMAGE_POSTER_URL} from '../../config';

const SearchCard = ({onPress, images}) => {
  return (
    <View style={style.container}>
      <TouchableWithoutFeedback  onPress={onPress}>
        <View style={style.button_container}>
          <Image
            source={{uri: `${IMAGE_POSTER_URL}${images.poster_path}`}}
            style={style.image}
          />
          <Text style={style.title} >{images.title}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
export default SearchCard;
