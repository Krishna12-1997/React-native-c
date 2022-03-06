import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './src/Component/SignInScreen';
import SignUpScreen from './src/SignUpScreen';
import EditDetails from './src/EditDetails';
import HomeScreen from './src/HomeScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='SignUpScreen' >
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="Details" component={EditDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    
  );
};

const styles = StyleSheet.create({
 

});

export default App;


