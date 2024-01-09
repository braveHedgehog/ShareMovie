/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unstable-nested-components */
import React, {useState, useEffect} from 'react';
import {ScrollView, TouchableOpacity, Text} from 'react-native';
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
  const renderContent = () => {
    switch (activeContent) {
      case 'bio':
        return <BiographyContent />;
      case 'movie':
        return <PersonMovie />;
      default:
        return null;
    }
  };
  const BiographyContent = () => <PersonCard person={people} />;
  const PersonMovie = () => <PersonMovie />;
  return (
    <ScrollView style={style.container}>
      <TouchableOpacity
            style={style.button}
            onPress={() => setActiveContent('bio')}>
            <Text
              style={[
                style.buttonText,
                activeContent === 'bio' && style.activeText,
              ]}>
              Place Description
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
              Gallery
            </Text>
          </TouchableOpacity>
      <Button onPress={goMovies} text="Go To Movies" loading={loading} />
      {renderContent()}
    </ScrollView>
  );
};

export default CrewDetail;
