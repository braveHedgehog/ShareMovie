/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3440',
  },
  inner_container: {
    flexDirection: 'row',
  },
  button: {
    paddingHorizontal: 40,
    paddingTop: 20,
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
