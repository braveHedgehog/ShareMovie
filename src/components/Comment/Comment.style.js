/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  inner_container: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  movie: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  user: {
    fontSize: 14,
    fontStyle: 'italic',
    color: 'white',
    marginTop: 2,
    textAlign: 'right',
  },
  date: {
    marginLeft: 10,
    fontSize: 10,
    fontStyle: 'italic',
    color: 'gray',
    textAlign: 'right',
  },
  comment: {
    fontSize: 17,
    marginTop: 5,
    color: 'white',
  },
});
