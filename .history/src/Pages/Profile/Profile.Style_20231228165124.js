/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3440',
  },
  row_container: {
    padding: 20,
    flexDirection: 'row',
  },
  Image: {
    resizeMode: 'contain',
    width: 100,
    height: 50,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#00b020',
    borderRadius: 10,
    padding: 10,
    marginTop: 70,
  },
  word: {
    color: 'white',
  },
  inner_container: {
    padding: 20,
  },
  Personal: {
    marginTop: 25,
    fontSize: 35,
    color: '#2E2D2D',
    borderBottomWidth: 2,
    borderBottomColor: '#2E2D2D',
    paddingBottom: 10,
  },
  align: {
    paddingTop: 20,
    flexDirection: 'row',
    paddingBottom: 15,
  },
  title: {
    marginTop: 5,
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 20,
  },
  edit: {
    flex: 1,
  },
  edit_word: {
    marginTop: 5,
    fontSize: 17,
    fontStyle: 'italic',
    textAlign: 'right',
  },
  password: {
    marginTop: 10,
    fontSize: 17,
    paddingLeft: 10,
  },
  content: {
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
