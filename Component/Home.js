import React, { useEffect, useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import { Button, View } from 'react-native-ui-lib'
import SyncStorage from 'sync-storage';
import { Postlist } from './Postlist';

const Home = ({navigation}) => {

  const styles = StyleSheet.create({
    infoContainer : {
      backgroundColor: 'white',
      padding: 20,
      margin: 10
    },
    welcomeName: {
      fontSize: 22,
      color:'black'
    },
    loginlogoutButton: {
        marginLeft: 30,
        marginRight: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    }
  })

  const [state, setState] = useState({
    name: ''
  })

  useEffect(() => {
    fetch('https://dummyjson.com/auth/me', {
  method: 'GET',
  headers: {
    'Authorization':  SyncStorage.get('token') 
  }, 
})
.then(res => res.json())
.then((data) => setState((prevState) => ({
  ...prevState,
  name: data.firstName
})));
  }, [])
  return (
    <View >
      <View style={styles.infoContainer}>
        <Text >Testing</Text>
      <Text style={styles?.welcomeName}>Welcome {state?.name}</Text>
      <Postlist/>
      </View>
    
   {
    SyncStorage.get('token') ? 
    <Button
    style={styles.loginlogoutButton}
    label=  {'Logout'}
    onPress={() => console.log('logout')}
    /> :
    <Button
    style={styles.loginlogoutButton}
    label= {'Login'}
    onPress={() => navigation.navigate('Login')}
    />
   }

   
  
    </View>
   
  )
}

export default Home