/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3440',
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    //padding: 20,
  },
  buttonText: {
    color: 'white',
    marginRight: 30,
    fontSize: 20,
    fontWeight: '600',
  },
  activeText: {
    color: '#00b020',
  },
});
