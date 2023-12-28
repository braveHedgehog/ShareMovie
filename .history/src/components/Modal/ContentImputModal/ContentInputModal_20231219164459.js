/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TextInput} from 'react-native';
import Button from '../../LoginPage/Button';
import Modal from 'react-native-modal';

import styles from './ContentInputModal.style';

const ContentInputModal = ({visible, onClose, onSend}) => {
  const [text, setText] = React.useState(null);

  function handleSend() {
    if (!text) {
      return;
    }

    onSend(text);
    setText(null);
  }
  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      swipeDirection="down"
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View style={styles.input_container}>
          <TextInput
            placeholder="Comment..."
            onChangeText={setText}
            //placeholderTextColor={'white'}
            multiline
            style={styles.input}
          />
        </View>
        <Button text="Submit" onPress={handleSend} style={styles.button} />
      </View>
    </Modal>
  );
};

export default ContentInputModal;
