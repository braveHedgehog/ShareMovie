/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Image, SafeAreaView} from 'react-native';
import Style from '../Login/Login.Style';
import {Formik} from 'formik';
import Input from '../../components/LoginPage/Input/Input';
import Button from '../../components/LoginPage/Button/Button';
import {showMessage} from 'react-native-flash-message';
import authErrorMessageParser from '../../utils/authErrorMessageParser';
import auth from '@react-native-firebase/auth';

const initialFormValues = {
  email: '',
  Password: '',
};

const Edit = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  function handleGoBack() {
    navigation.goBack();
  }

  async function handleFormSubmit(formValues) {
    try {
      if (formValues.email === '' || formValues.Password === '') {
        showMessage({
          message: 'E-mail or Password is empty!',
          type: 'info',
        });
      } else {
        setLoading(true);
        await auth().currentUser.updateEmail(formValues.email);
        await auth().currentUser.updatePassword(formValues.Password);
        showMessage({
          message: 'Congrats!!',
          type: 'success',
        });
        navigation.goBack();
        setLoading(false);
      }
    } catch (error) {
      console.log(error.code);
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'info',
      });
      setLoading(false);
    }
  }
  return (
    <SafeAreaView style={Style.container}>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <Input
              onType={handleChange('email')}
              value={values.email}
              placeholder="E-mail"
              isSecure={false}
            />
            <Input
              onType={handleChange('Password')}
              value={values.Password}
              placeholder="Password"
              isSecure={true}
            />
            <Button text="Edit" onPress={handleSubmit} loading={loading} />
          </>
        )}
      </Formik>
      <Button text="Go Back" onPress={handleGoBack} loading={loading} />
    </SafeAreaView>
  );
};

export default Edit;
