import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {WHITE} from '../../config/colors';
import LoginScreen from '../Login/LoginScreen';
import {useStoreState, useStoreActions} from 'easy-peasy';
import ButtonDefault from '../../components/Button/ButtonDefault';

const ProfileScreen = () => {
  const user = useStoreState((state) => state.user);
  const clearUser = useStoreActions((actions) => actions.clearUser);
  console.log(user);
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
        <ButtonDefault title={'Logout'} onPress={() => clearUser()} />
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
    backgroundColor: WHITE,
  },
});

export default ProfileScreen;
