import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';

const OnBoarding = ({navigation}) => {
    const handleDone = () => {
        navigation.navigate('Home')
    }
  return (
    <View style={styles.container}>
          <Onboarding
              onDone={handleDone}
        onSkip={handleDone}
        bottomBarHighlight={true}
        pages={[
            {
              backgroundColor: '#e6dff9',
              image: <LottieView style={styles.imageView} source={require('../assets/c1.json')} autoPlay loop/>,
              title:  <Text style={{fontSize:27,fontWeight:'800'}}>Work-Life Balance</Text>
            },
            
            {
              backgroundColor: '#e9fce6',
              image: <LottieView style={[styles.imageView,styles.imageMiddleView]} source={require('../assets/c3.json')} autoPlay loop/>,
              title:  <Text style={{fontSize:27,fontWeight:'800',left:40}}>Work In Team</Text>
            },
            {
              backgroundColor: '#c0fffe',
              image: <LottieView style={[styles.imageView,styles.imageLastView]} source={require('../assets/c2.json')} autoPlay loop/>,
              title:  <Text style={{fontSize:27,fontWeight:'800'}}>LeaderShip</Text>
            },
            
            
          ]}
          />
    </View>
  )
}

export default OnBoarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
    alignItems: 'center',
        textAlign:'center'
  },
  imageView: {
    width: 300,
    height:300
  },
  imageMiddleView: {
    left: 40,
    width: 340,
  },
  imageLastView: {
    width: 340,
    height:320
  }
})