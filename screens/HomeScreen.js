import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
const HomeScreen = () => {
  return (
    <View style={styles.container}>
          <LottieView style={{ width: 300, height: 600 }} source={require('../assets/aa.json')} autoPlay loop />
          <Text style={{fontSize:30}}>Home Page</Text>
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