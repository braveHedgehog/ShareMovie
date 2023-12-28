/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2c3440',
      padding: 10,
      paddingTop: 30,
      },
      image: {
        textAlign: 'center',
        width: Dimensions.get('window').width / 4,
        height: Dimensions.get('window').height / 5,
      },
      bio: {
        padding: 20,
        color: 'white',
        fontSize: 12,
        textAlign: 'justify',
      },
});
