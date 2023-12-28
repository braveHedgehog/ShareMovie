/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  trendingPeopleImage: {
    height: Dimensions.get('window').height / 4,
    width: Dimensions.get('window').width / 3,
    marginLeft: 20,
    borderRadius: 50,
  },
  trendingPeopleName: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
  trendingPeopleContainer: {
    margin: 10,
  },
  heading: {
    marginTop: 30,
    fontSize: 19,
    color: 'white',
    margin: 10,
  },
  trendingPeopleCharacter: {
    color: 'white',
    fontSize: 10,
    textAlign: 'center',
    marginLeft: -5,
    fontStyle: 'italic',
  },
});