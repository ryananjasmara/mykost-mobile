import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {WHITE} from '../../config/colors';
import LoginScreen from '../Login/LoginScreen';
import {useStoreState} from 'easy-peasy';

const ProfileScreen = () => {
  const user = useStoreState((state) => state.user);
  /** Start Of Lifecycle Section */
  // Did Mount
  useEffect(() => {
    console.log('ProfileScreen.js did mount');
  }, []);
  /** End Of Lifecycle Section */
  /** Start Of Functional Section */
  /** End Of Functional Section */
  /** Start Of Render Section */
  // Login Screen
  const renderLoginScreen = () => {
    return <LoginScreen />;
  };
  // Profile Screen
  const renderProfileScreen = () => {
    return (
      <View style={styles.mainContainer}>
        <Text>Hello World</Text>
      </View>
    );
  };
  // Main
  if (user !== null) {
    return renderProfileScreen();
  } else {
    return renderLoginScreen();
  }
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

export default ProfileScreen;
