/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    backgroundColor: '#2c3440',
    marginLeft: 10,
    marginRight: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: Dimensions.get('window').height / 3,
  },
  input_container: {
    flex: 1,
  },
});
