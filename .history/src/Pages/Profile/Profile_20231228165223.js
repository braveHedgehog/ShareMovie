/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import Style from './Profile.Style';
import auth from '@react-native-firebase/auth';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import {useSelector} from 'react-redux';
import MovieCard from '../../components/MovieCard/MovieCard';
import store from '../../context/store';

const Profile = ({navigation}) => {
  function handleLogOut() {
    auth().signOut();
    navigation.navigate('Home');
  }

  function handleEdit() {
    navigation.navigate('Edit');
  }

  const favoriteMovie = useSelector(state => state.favorites.favoriteList);
  const emptyComponent = () => {
    return (
      <View>
        <Text style={Style.emptyText}>You don't have a favorite movie.</Text>
      </View>
    );
  };
  return (
    <View style={Style.container}>
      <ProfileCard profile={auth().currentUser} onPress={handleEdit} />
      <TouchableOpacity style={Style.button} onPress={handleLogOut}>
        <Text style={Style.word}>Log Out</Text>
      </TouchableOpacity>
      <FlatList
        horizontal={true}
        data={favoriteMovie}
        renderItem={({item}) => (
          <MovieCard
            images={item}
            onPress={() =>
              navigation.navigate('MovieDetail', {
                movieId: item.id,
                poster_path: item.poster_path,
              })
            }
          />
        )}
        ListEmptyComponent={emptyComponent}
      />
    </View>
  );
};

export default Profile;
