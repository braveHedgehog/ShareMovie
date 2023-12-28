/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  trendingPeopleImage: {
    height: Dimensions.get('window').height / 10,
    width: Dimensions.get('window').width / 5,
    marginLeft: 20,
    borderRadius: 500,
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
  trendingPeopleCharacter: {
    color: '#7C7A7A',
    fontSize: 10,
    textAlign: 'center',
    marginLeft: -5,
    fontStyle: 'italic',
  },
});
