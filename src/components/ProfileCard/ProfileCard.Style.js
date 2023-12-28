/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3440',
    marginTop: 200,
  },
  inner_container: {
    padding: 20,
  },
  Personal: {
    marginTop: 25,
    fontSize: 35,
    color: 'white',
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    paddingBottom: 10,
  },
  align: {
    paddingTop: 20,
    flexDirection: 'row',
    paddingBottom: 15,
  },
  title: {
    color: 'white',
    marginTop: 5,
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 20,
  },
  edit: {
    flex: 1,
  },
  edit_word: {
    color: 'white',
    marginTop: 5,
    fontSize: 17,
    fontStyle: 'italic',
    textAlign: 'right',
  },
  password: {
    color: 'white',
    marginTop: 10,
    fontSize: 17,
    paddingLeft: 10,
  },
  content: {
    color: 'white',
    marginTop: 5,
    fontSize: 17,
    paddingLeft: 10,
  },
  car: {
    marginTop: 50,
    resizeMode: 'contain',
    width: Dimensions.get('window').width,
    height: 100,
  },
});
