/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {GET} from '../../services/Api';
import PersonCard from '../../components/PersonCard/PersonCard';

const CrewDetail = props => {
  //console.log(props.route.params.personId);
  const [people, setPeople] = useState([]);
  useEffect(() => {
    const getPeople = async () => {
      const data = await GET(`person/${props.route.params.personId}`);
      setPeople(data);
    };
    getPeople();
  }, []);
  console.log(people);
  return (
    <View>
      <FlatList
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        data={people}
        renderItem={({item}) => <PersonCard person={item} />}
      />
    </View>
  );
};

export default CrewDetail;
