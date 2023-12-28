/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import style from './Comment.style';

const CommentCard = props => {
  return (
    <View style={style.container} >
      <Text style={style.movie} >{props.comments.movie_name}</Text>
      <Text style={style.comment}>{props.comments.comment}</Text>
      <View style={style.inner_container} >
      <Text style={style.user}>{props.comments.user}</Text>
      <Text style={style.date}>{props.comments.date}</Text>
      </View>
    </View>
  );
};

export default CommentCard;
