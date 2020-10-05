import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NavigationService from '../../navigation/services';
import {WHITE} from '../../config/colors';

const SplashScreen = () => {
  const [isInitializeFinish, setInitializeFinish] = useState(false);
  /** Start Of Lifecycle Section */
  // Did Mount
  useEffect(() => {
    console.log('SplashScreen.js did mount');
    setTimeout(() => {
      setInitializeFinish(true);
    }, 2000);
  }, []);
  // Did Update
  useEffect(() => {
    if (isInitializeFinish) {
      NavigationService.reset('HomeScreen');
    }
  });
  /** End Of Lifecycle Section */
  /** Start Of Functional Section */
  /** End Of Functional Section */
  /** Start Of Render Section */
  return (
    <View style={styles.mainContainer}>
      <Text>Splash Screen</Text>
    </View>
  );
  /** End Of Render Section */
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: WHITE,
  },
});

export default SplashScreen;
