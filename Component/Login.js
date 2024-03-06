import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, TextInput, ToastAndroid } from 'react-native'
import { Button, Card, RadioButton, RadioGroup, Text, TextField, View } from 'react-native-ui-lib'
import SyncStorage from 'sync-storage';

export const Login = ({navigation}) => {

  const [state, setState] = useState({
    email: '',
    password: ''
  })


  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      backgroundColor: 'white',
      width: '100%',
      margin: 'auto',
      justifyContent: 'center',
      display: 'flex',
      paddingLeft: 20,
      paddingRight: 20,
      margin: '100px',
      flex: 1
    },
    input: {
      borderBottomColor: 'black',
    },

    button: {
      marginTop: 20
    },

    registerLink : {
      marginTop: 20,
      textDecorationLine:'underline',
      textAlign:'center'
    }

  })

  const handleLogin = () => {
    try {
      fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: state.email,
          password: state.password,
          expiresInMins: 60,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          // Handle the response data
        if(data?.token) {
          ToastAndroid.show(`Welcome ${data.firstName}`, ToastAndroid.SHORT)
          SyncStorage.set('token', data.token);
          setState((prevstate) => ({
            ...prevstate,
            email: '',
            password: ''
          }))
          navigation.navigate('Home')
        } else {
          ToastAndroid.show(data?.message, ToastAndroid.SHORT)
        }
         
        })
        .catch((error) => {
          console.error('Fetch error:', error);
        });
    } catch (error) {
      ToastAndroid.show(error, ToastAndroid.SHORT)
      console.error('Error:', error);
    }
  };

  if(SyncStorage.get('token')?.length > 0) return navigation.navigate('Home')
  return (
    <View style={styles.container}>
      <TextField
        placeholder={'Email'}
        floatingPlaceholder
        enableErrors
        validate={['required', 'email', (value) => value.length > 6]}
        validationMessage={['Field is required', 'Email is invalid', 'Password is too short']}
        showCharCounter
        maxLength={30}
        value={state.email}
        style={styles.input}
        onChangeText={(email) => setState((prevstate) => ({
          ...prevstate,
          email : email
        }))}
      />
      <TextField
        placeholder={'Passowrd'}
        floatingPlaceholder
        enableErrors
        value={state.password}
         validate={['required', 'email', (value) => value.length > 6]}
        validationMessage={['Field is required', 'Email is invalid', 'Password is too short']}
        showCharCounter
        maxLength={30}
        onChangeText={(password) => setState((prevstate) => ({
          ...prevstate,
          password : password
        }))}
      />

      <Button style={styles.button} label="Login" onPress={() =>handleLogin()} />

      <Text style={styles.registerLink}>Create a New Account</Text>

    </View>



  )
}
