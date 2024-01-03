import { Image, StyleSheet,TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import Animated,{FadeInDown,FadeInUp} from 'react-native-reanimated';
import { setItem } from '../component/Async';
const OnBoarding = ({navigation}) => {
  const handleDone = () => {
      setItem('onboarded','1')
        navigation.navigate('Home')
    }
  const CustomSkip = ({ onPress }) => (
    <TouchableOpacity onPress={onPress}>
    <Text style={{left:30,fontSize:18,color:'black',backgroundColor:'#f1eff6',padding:10,borderRadius:11}}>Skip</Text>
  </TouchableOpacity>
  )
  const CustomNext = ({ onPress }) => (
    <TouchableOpacity onPress={onPress}>
      <Text style={{right:30,fontSize:18,color:'black',backgroundColor:'#f1eff6',padding:10,borderRadius:11}}>Next</Text>
    </TouchableOpacity>
  );
  const doneButton = ({...props}) => {
    return (
        <TouchableOpacity {...props}>
        <Text style={{right: 30, fontSize:17, backgroundColor:'#e9feff',padding:6,borderRadius:10,fontWeight:'700'}}>Done</Text>
    </TouchableOpacity>
    )
}
  return (
    <View style={styles.container}>
      <Onboarding
        SkipButtonComponent={CustomSkip}
        NextButtonComponent={CustomNext}
        DoneButtonComponent={doneButton}
              onDone={handleDone}
        onSkip={handleDone}
        bottomBarHighlight={true}
        pages={[
            {
              backgroundColor: '#e6dff9',
            image: <Animated.View entering={FadeInDown.delay(100).duration(1000).springify()}>
                <LottieView style={styles.imageView} source={require('../assets/c1.json')} autoPlay loop/>
              </Animated.View>,
            title: <Animated.Text entering={FadeInUp.delay(200).duration(1000).springify()} style={{ fontSize: 30, fontWeight: '800',color:'black',left:10 }}>Work-Life Balance</Animated.Text>,
            subtitle: <Animated.Text style={{marginTop:10,fontSize:16,left:10}} entering={FadeInDown.delay(300).duration(1000).springify()}>We Value Work Life Balance</Animated.Text>,
          },
            
            {
              backgroundColor: '#e9fce6',
            image: <Animated.View style={styles.imageMiddleView}  entering={FadeInDown.duration(1000).springify()}>
                <LottieView style={[styles.imageView,styles.imageLastView]} source={require('../assets/c2.json')} autoPlay loop/>
              </Animated.View>,
            title: <Animated.Text  entering={FadeInUp.delay(200).duration(1000).springify()} style={{ fontSize: 30, fontWeight: '800',color:'black',left:20 }}>Team Work</Animated.Text>,
            subtitle: <Animated.Text  style={{marginTop:10,fontSize:16,left:30}} entering={FadeInDown.delay(300).duration(1000).springify()}>We Value Team Work</Animated.Text>,
          },

          {
            backgroundColor: '#c0fffe',
          image: <Animated.View style={styles.imageLastView} entering={FadeInDown.delay(100).duration(1000).springify()}>
              <LottieView style={styles.imageView} source={require('../assets/c3.json')} autoPlay loop/>
            </Animated.View>,
          title: <Animated.Text entering={FadeInUp.delay(200).duration(1000).springify()} style={{ fontSize: 30, fontWeight: '800',color:'black' }}>Organization benefits</Animated.Text>,
          subtitle: <Animated.Text style={{marginTop:10,fontSize:16}} entering={FadeInDown.delay(300).duration(1000).springify()}>We Value Organization benefits</Animated.Text>,
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
    left: 20,
    width: 340,
  },
  imageLastView: {
    width: 340,
    height: 320,
    left:10
  }
})