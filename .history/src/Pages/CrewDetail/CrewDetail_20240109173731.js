/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unstable-nested-components */
import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {GET} from '../../services/Api';
import PersonCard from '../../components/PersonCard/PersonCard';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/LoginPage/Button/Button';
import style from './CrewDetail.style';

const CrewDetail = props => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeContent, setActiveContent] = useState('description');
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
    navigation.navigate('PersonMovie', {
      personId: props.route.params.personId,
    });
  }
  const BiographyContent = () => <PersonCard person={people} />;
  const GalleryContent = () => <Text>Gallery Content</Text>;
  const ReviewsContent = () => <Text>Reviews Content</Text>;
  return (
    <ScrollView style={style.container}>
      <PersonCard person={people} />
      <Button onPress={goMovies} text="Go To Movies" loading={loading} />
    </ScrollView>
  );
};

export default CrewDetail;
