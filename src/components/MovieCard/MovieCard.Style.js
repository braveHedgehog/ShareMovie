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
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').height / 5,
    borderRadius: 15,
  },
});
