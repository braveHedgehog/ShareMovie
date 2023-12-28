/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';

const CrewDetail = props => {
  console.log(props.route.params.id);
  return (
    <View>
      <Text>Hello Crew</Text>
    </View>
  );
};

export default CrewDetail;
