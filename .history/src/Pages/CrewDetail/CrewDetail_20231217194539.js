/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {GET} from '../../services/Api';
import PersonCard from '../../components/PersonCard/PersonCard';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/LoginPage/Button/Button';

const CrewDetail = props => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  useEffect(() => {
    const getPeople = async () => {
      const data = await GET(`person/${props.route.params.personId}`);
      setPeople(data);
      setLoading(false);
    };
    getPeople();
  }, []);
  function goMovies() {
    navigation.navigate('Home', {
      personId: props.route.params.personId,
    });
  }
  return (
    <ScrollView>
      <PersonCard person={people} />
      <Button onPress={goMovies} text="Go To Movies" loading={loading} />
    </ScrollView>
  );
};

export default CrewDetail;
