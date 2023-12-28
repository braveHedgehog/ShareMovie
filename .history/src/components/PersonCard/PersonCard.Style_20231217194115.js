/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2c3440',
      padding: 10,
      paddingTop: 30,
      alignItems: 'center',
      },
      image: {
        width: Dimensions.get('window').width / 3,
        height: Dimensions.get('window').height / 4,
      },
      name: {
        padding: 20,
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'justify',
      },
      bio: {
        padding: 20,
        color: 'white',
        fontSize: 12,
        textAlign: 'justify',
      },
});
