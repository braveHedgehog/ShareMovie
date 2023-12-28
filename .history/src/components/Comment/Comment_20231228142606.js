/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import style from './Comment.style';

const CommentCard = ({item}) => {
  return (
    <View style={style.container} >
      <Text>{item.movie_name}</Text>
      <View style={style.inner_container} >
      <Text>{item.comment}</Text>
      <Text>{item.user}</Text>
      <Text>{item.date}</Text>
      </View>
    </View>
  );
};

export default CommentCard;
