import { StyleSheet, View, Text, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import Lottie from 'lottie-react-native';
import { setItem } from '../component/Async';

const {height,width} = Dimensions.get('window')
const OnboardingScreen = ({ navigation }) => {
    const handleDone = () => {
        
        setTimeout(() => {
            navigation.push('Home')
        }, 100)
        setItem('onboarded','1')
    }
    const doneButton = ({...props}) => {
        return (
            <TouchableOpacity {...props}>
            <Text>Done</Text>
        </TouchableOpacity>
        )
    }
  return (
    <View style={styles.container}>
          <Onboarding
              onDone={handleDone}
              onSkip={handleDone}
              DoneButtonComponent={doneButton}
              bottomBarHighlight={true}
              
        dotStyle={styles.dotStyle} // Apply dotStyle here
        selectedDotStyle={styles.selectedDotStyle} // Apply selectedDotStyle here
        pages={[
          {
            backgroundColor: '#fffdfd',
            image: (
              <View>
                {/* <Lottie style={styles.lottie} source={require('../assets/ani.json')} autoPlay loop /> */}
              </View>
            ),
            title: 'Boost Productivity',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#fad2bd',
            image: (
              <View>
                <Text>hello</Text>
              </View>
            ),
            title: 'Work Seamlessly',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
        ]}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
        backgroundColor: '#060303',
        width: width * 1,
        height:height*1
    
  },
    lottie: {
        width: width * 0.5,
        height:height*0.9
  }
});
