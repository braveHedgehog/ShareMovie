/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unstable-nested-components */
import React, {useState, useEffect} from 'react';
import {ScrollView, TouchableOpacity, Text, View} from 'react-native';
import {GET} from '../../services/Api';
import PersonCard from '../../components/PersonCard/PersonCard';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/LoginPage/Button/Button';
import style from './CrewDetail.style';
import PersonMovieCard from '../../components/PersonMovieCard';

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
  const renderContent = () => {
    switch (activeContent) {
      case 'Bio':
        return <BiographyContent />;
      case 'Movie':
        return <PersonMovie />;
      case 'Crew':
        return <PersonCrewMovie />;
      default:
        return <BiographyContent />;
    }
  };
  const BiographyContent = () => <PersonCard person={people} />;
  const PersonMovie = () => (
    <PersonMovieCard
      title="Actor"
      isForPage="details"
      url={`person/${props.route.params.personId}/movie_credits`}
    />
  );
  const PersonCrewMovie = () => (
    <PersonMovieCard
      isForPage
      title="Crew"
      url={`person/${props.route.params.personId}/movie_credits`}
    />
  );
  return (
    <ScrollView style={style.container}>
      <View style={style.inner_container}>
        <TouchableOpacity
          style={style.button}
          onPress={() => setActiveContent('Bio')}>
          <Text
            style={[
              style.buttonText,
              activeContent === 'Bio' && style.activeText,
            ]}>
            Bio
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.button}
          onPress={() => setActiveContent('Movie')}>
          <Text
            style={[
              style.buttonText,
              activeContent === 'Movie' && style.activeText,
            ]}>
            Actor
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.button}
          onPress={() => setActiveContent('Crew')}>
          <Text
            style={[
              style.buttonText,
              activeContent === 'Crew' && style.activeText,
            ]}>
            Crew
          </Text>
        </TouchableOpacity>
      </View>
      {renderContent()}
    </ScrollView>
  );
};

export default CrewDetail;
