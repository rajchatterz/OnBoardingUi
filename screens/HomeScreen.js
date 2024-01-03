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
            <LottieView style={{ width: 300, height: 500 }} source={require('../assets/cele.json')} autoPlay loop />
            <Text style={{ fontSize: 30,marginBottom:30 }}>Home Page</Text>
            <TouchableOpacity onPress={handleReset}>
                <Text style={{ backgroundColor: '#8f50d2', padding:10,color:'white',fontSize:17,fontWeight:'900',elevation:100,shadowColor:'#7c5cb2',shadowOpacity:0.6,borderRadius:10}}>Reset Async</Text>
            </TouchableOpacity>
        </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center'
    }
})