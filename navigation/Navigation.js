import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import OnboardingScree from '../screens/OnboardingScree'
const Stack = createNativeStackNavigator()
const Navigation = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName='Onboard'>
              <Stack.Screen options={{headerShown:false}} name='Onboard' component={OnboardingScree}/>
              <Stack.Screen options={{headerShown:false}} name='Home' component={HomeScreen}/>
          </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})