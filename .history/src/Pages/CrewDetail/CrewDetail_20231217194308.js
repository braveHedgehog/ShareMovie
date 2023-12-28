/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {ScrollView, Button} from 'react-native';
import {GET} from '../../services/Api';
import PersonCard from '../../components/PersonCard/PersonCard';
import {useNavigation} from '@react-navigation/native';

const CrewDetail = props => {
  const [people, setPeople] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    const getPeople = async () => {
      const data = await GET(`person/${props.route.params.personId}`);
      setPeople(data);
    };
    getPeople();
  }, []);
  function goMovies() {
    navigation.navigate('CrewDetail', {
      personId: props.route.params.personId,
    });
  }
  return (
    <ScrollView>
      <PersonCard person={people} />
      <Button onPress={goMovies()} />
    </ScrollView>
  );
};

export default CrewDetail;
