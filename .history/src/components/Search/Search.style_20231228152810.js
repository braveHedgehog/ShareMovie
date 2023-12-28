/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: Dimensions.get('window').width / 8,
    height: Dimensions.get('window').height / 8,
    borderRadius: 15,
  },
  title: {
    fontSize: 12,
    fontStyle: 'italic',
    color: 'white',
  },
});
