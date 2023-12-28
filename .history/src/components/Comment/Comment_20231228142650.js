/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import style from './Comment.style';

const CommentCard = ({item}) => {
  return (
    <View style={style.container} >
      <Text style={style.movie} >{item.movie_name}</Text>
      <View style={style.inner_container} >
      <Text style={style.comment}>{item.comment}</Text>
      <Text style={style.user}>{item.user}</Text>
      <Text style={style.date}>{item.date}</Text>
      </View>
    </View>
  );
};

export default CommentCard;
