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
});
