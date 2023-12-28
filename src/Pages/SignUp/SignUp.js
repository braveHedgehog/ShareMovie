/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {ScrollView, Text} from 'react-native';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import Input from '../../components/LoginPage/Input';
import Button from '../../components/LoginPage/Button/Button';
import styles from './SignUp.Style';
import authErrorMessageParser from '../../utils/authErrorMessageParser';
const initialFromValues = {
  email: '',
  password: '',
  username:'',
};
const SignUp = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  async function handleFormSubmit(formValues) {
    if (formValues.email === '' || formValues.password === '' || formValues.username === '') {
      showMessage({
        message: 'Form is empty',
        type: 'info',
      });
    } else {
      try {
        setLoading(true);
        await auth().createUserWithEmailAndPassword(formValues.email, formValues.password);
        showMessage({
          message: 'User is Created !!!',
          type: 'success',
        });
        setLoading(false);
        navigation.navigate('Home');
      } catch (error) {
        showMessage({
          message: authErrorMessageParser(error.code),
          type: 'error',
        });
          setLoading(false);
      }
    }
  }
  function handleGoBack(){
    navigation.goBack();
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Share Movie</Text>
      <Formik initialValues={initialFromValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
          <Input
              placeholder="user name"
              value={values.username}
              onType={handleChange('username')}
            />
            <Input
              placeholder="e-mail"
              value={values.email}
              onType={handleChange('email')}
            />
            <Input
              placeholder="password"
              value={values.password}
              onType={handleChange('password')}
              isSecure
            />
            <Button text="Sign Up" loading={loading} onPress={handleSubmit} />
          </>
        )}
      </Formik>
      <Button text="Go Back" loading={loading} onPress={handleGoBack} />
    </ScrollView>
  );
};

export default SignUp;
