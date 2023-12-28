/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './Input.Style';

const Input = ({placeholder, onType, value, isSecure}) => {
  return (
    <View style={styles.container} >
      <TextInput  style={styles.input}
        autoCapitalize="none"
        placeholder={placeholder}
        onChangeText={onType}
        value={value}
        secureTextEntry={isSecure}
        placeholderTextColor={'white'} />
    </View>
  );
};

export default Input;
