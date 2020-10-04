import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SplashScreen = () => {
  /** Start Of Lifecycle Section */
  // Did Mount
  useEffect(() => {
    console.log('SplashScreen.js did mount');
  }, []);
  /** End Of Lifecycle Section */
  /** Start Of Functional Section */
  /** End Of Functional Section */
  /** Start Of Render Section */
  return (
    <View style={styles.container}>
      <Text>Splash Screen</Text>
    </View>
  );
  /** End Of Render Section */
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default SplashScreen;
