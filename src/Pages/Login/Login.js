/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {ScrollView, Text} from 'react-native';
import Input from '../../components/LoginPage/Input';
import Button from '../../components/LoginPage/Button/Button';
import styles from './Login.Style';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import authErrorMessageParser from '../../utils/authErrorMessageParser';
import Home from '../Home/Home';
const initialFromValues = {
  email: '',
  password: '',
};

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  async function handleFormSubmit(formValues) {
    if (formValues.email === '' || formValues.password === '') {
      showMessage({
        message: 'E-mail or Password is empty',
        type: 'info',
      });
    } else {
      try {
        setLoading(true);
        await auth().signInWithEmailAndPassword(formValues.email, formValues.password);
        showMessage({
          message: 'Congrats !!!',
          type: 'success',
        });
        navigation.navigate(Home);
        setLoading(false);
      } catch (error) {
        showMessage({
          message: authErrorMessageParser(error.code),
          type: 'info',
        });
          setLoading(false);
      }
    }
  }
  function handleSignUp(){
    navigation.navigate('SignUp');
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Share Movie</Text>
      <Formik initialValues={initialFromValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
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
            <Button text="Login" loading={loading} onPress={handleSubmit} />
          </>
        )}
      </Formik>
      <Button text="Sign Up" loading={loading} onPress={handleSignUp} />
    </ScrollView>
  );
};
export default Login;
