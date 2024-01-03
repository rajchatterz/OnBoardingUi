import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import OnboardingScree from '../screens/OnboardingScree'
import OnBoarding from '../screens/OnBoarding'
import { getItem } from '../component/Async'
const Stack = createNativeStackNavigator()
const Navigation = () => {
    const [showOnboarding, setShowOnboarding] = useState(null)
    useEffect(() => {
        checkIfAlreadyOnboareded()
    },[])
    const checkIfAlreadyOnboareded = async() => {
        let onboarded = await getItem('onboarded');
        if (onboarded == 1) {
            setShowOnboarding(false)
        } else {
            setShowOnboarding(true)
        }
    }
    if (showOnboarding == null) {
        return null
    }
    if (showOnboarding) {
        return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Onboard'>
                <Stack.Screen options={{headerShown:false}} name='Onboard' component={OnBoarding}/>
                <Stack.Screen options={{headerShown:false}} name='Home' component={HomeScreen}/>
            </Stack.Navigator>
        </NavigationContainer> 
        )
    } else {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Home'>
                    <Stack.Screen options={{headerShown:false}} name='Onboard' component={OnboardingScree}/>
                    <Stack.Screen options={{headerShown:false}} name='Home' component={HomeScreen}/>
                </Stack.Navigator>
            </NavigationContainer> 
        )
    }
  
}

export default Navigation

const styles = StyleSheet.create({})