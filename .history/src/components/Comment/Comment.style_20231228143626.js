/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  inner_container: {
    flexDirection: 'row',
  },
  movie: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  user: {
    marginLeft: 5,
    fontSize: 10,
    fontStyle: 'italic',
    color: 'white',
    marginTop: 2,
  },
  date: {
    marginLeft: 5,
    fontSize: 8,
    fontStyle: 'italic',
    color: 'gray',
  },
  comment: {
    color: 'white',
  },
});
