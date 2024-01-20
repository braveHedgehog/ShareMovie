/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
    heading: {
        marginTop: 200,
        fontSize: 19,
        color: 'white',
        margin: 10,
      },
      list: {
        width: Dimensions.get('window').width / 3,
      }
});
