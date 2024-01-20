/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  trendingPeopleImage: {
    height: Dimensions.get('window').height / 2,
    width: Dimensions.get('window').width / 4,
    marginLeft: 20,
    borderRadius: 15,
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
    fontSize: 15,
    textAlign: 'center',
    marginLeft: 2,
    fontStyle: 'italic',
  },
});