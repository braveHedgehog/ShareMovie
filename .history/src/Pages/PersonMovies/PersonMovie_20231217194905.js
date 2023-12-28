import React, {useEffect, useState} from 'react';
import {ScrollView, Text, FlatList} from 'react-native';
import {GET} from '../../services/Api';
import {IMAGE_POSTER_URL} from '../../config';
import MovieCard from '../../components/MovieCard/MovieCard';
import styles from './Home.Style';
import AppBar from '../../components/AppBar';

const PersonMovie = () => {
    return(
        <ScrollView></ScrollView>
    );

}

export default PersonMovie;
