/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  imageBg: {
    width: Dimensions.get('window').width,
    height: 250,
  },
  genreContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 10,
  },
  genre: {
    color: 'white',
    fontSize: 16,
  },
  sectionBg: {
    backgroundColor: '#2c3440',
    height: Dimensions.get('window').height,
  },
  detailsMovieTitle: {
    fontSize: 28,
    color: 'white',
    textAlign: 'center',
    marginTop: 40,
  },
  overview: {
    color: 'white',
    marginHorizontal: 10,
    textAlign: 'justify',
    fontSize: 16,
  },
  details: {
    color: 'white',
    fontSize: 15,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  heading: {
    fontSize: 19,
    color: 'white',
    margin: 10,
  },
  genreDetail: {
    display: 'flex',
    flexDirection: 'row',
  },
  tagline: {
    color: 'white',
    marginHorizontal: 10,
    textAlign: 'justify',
    fontSize: 20,
    fontWeight: 'bold',
  },
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
  button: {
    alignItems: 'center',
    backgroundColor: '#00b020',
    borderRadius: 10,
    padding: 10,
  },
  word: {
    color: 'white',
  },
});
