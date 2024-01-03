import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { removeItem } from '../component/Async'
const HomeScreen = ({navigation}) => {
    const handleReset = async() => {
        await removeItem('onboarded');
        navigation.push('Onboard')
    }
  return (
        <View style={styles.container}>
            <LottieView style={{ width: 300, height: 600 }} source={require('../assets/cele.json')} autoPlay loop />
            <Text style={{ fontSize: 30 }}>Home Page</Text>
            <TouchableOpacity onPress={handleReset}>
                <Text style={{ backgroundColor: 'green', padding:10}}>Reset</Text>
            </TouchableOpacity>
        </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    }
})