import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import NavigationService from '../../navigation/services';
import {WHITE} from '../../config/colors';
import {MYKOST_LOGO} from '../../assets/images';
import {useStoreRehydrated} from 'easy-peasy';

const SplashScreen = () => {
  const isRehydrated = useStoreRehydrated();
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
    if (isInitializeFinish && isRehydrated) {
      NavigationService.reset('HomeScreen');
    }
  });
  /** End Of Lifecycle Section */
  /** Start Of Functional Section */
  /** End Of Functional Section */
  /** Start Of Render Section */
  return (
    <View style={styles.mainContainer}>
      <Image source={MYKOST_LOGO} style={styles.logo} />
      <Text style={styles.text}>MYKOST</Text>
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
  logo: {
    height: 200,
    width: undefined,
    aspectRatio: 1 / 1,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
});

export default SplashScreen;
