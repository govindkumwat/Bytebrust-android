import React, {useEffect} from 'react'
import { Text, TextInputComponent, View } from 'react-native'
import Navbar from './Component/Navbar';
import { NavigationContainer } from '@react-navigation/native';
import { Login } from './Component/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Component/Home';
import SyncStorage from 'sync-storage';

const Stack = createNativeStackNavigator();

const App = ({navigation}) => {
  useEffect(() => {
    const checkTokenAndNavigate = async () => {
      try {
        // Check if the token exists in local storage
        const token = await SyncStorage.get('token');

        // If the token exists, navigate to the Home screen
        if (token) {
          navigation.navigate('Home');
        }
      } catch (error) {
        console.error('Error checking token:', error);
      }
    };

    checkTokenAndNavigate();
  }, [navigation]); // Empty dependency array ensures that this effect runs only once when the component mounts

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Login' component={Login} />
       
      </Stack.Navigator>
      
    </NavigationContainer>

  )
}

export default App