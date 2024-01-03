import { StyleSheet,Image, Text, View } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper'
const OnboardingScree = () => {
  return (
    <View style={styles.container}>
          <Onboarding
              pages={[
                {
                      backgroundColor: '#fff',
                    image: <Image source={require('../assets/cart.png')} />,
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                  },
                {
                      backgroundColor: '#fff',
                    image: <Image source={require('../assets/cart.png')} />,
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                  },
          ]}
          />
    </View>
  )
}

export default OnboardingScree

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    }
})