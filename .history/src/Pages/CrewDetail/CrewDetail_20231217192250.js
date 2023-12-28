/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {GET} from '../../services/Api';
import {IMAGE_POSTER_URL} from '../../config';

const CrewDetail = props => {
  console.log(props.route.params.personId);
  const [people, setPeople] = useState([]);
  const [image, setImage] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const response = await GET(`person/${props.route.params.personId}`);
      setPeople(response.results);
      const images = response.results.map(
        data => `${IMAGE_POSTER_URL}${data.poster_path}`,
      );
      let backImages = [];
      for (let i = 0; i < 10; ++i) {
        backImages = [...backImages, images[i]];
      }

      setImage(backImages);
    };

    getMovies();
  }, []);

  return (
    <View>
      <Text>Hello Crew</Text>
    </View>
  );
};

export default CrewDetail;
