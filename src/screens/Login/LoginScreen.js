import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {PRIMARY, WHITE} from '../../config/colors';
import NavigationService from '../../navigation/services';

const LoginScreen = () => {
  /** Start Of Lifecycle Section */
  // Did Mount
  useEffect(() => {
    console.log('LoginScreen.js did mount');
  }, []);
  /** End Of Lifecycle Section */
  /** Start Of Functional Section */
  // Navigate To Login Form
  const navigateToLoginForm = (loginType) => {
    NavigationService.navigate('LoginFormScreen', {loginType});
  };
  /** End Of Functional Section */
  /** Start Of Render Section */
  // button login as pemilik
  const renderButtonLoginAsPemilik = () => {
    return (
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigateToLoginForm('pemilik')}>
        <Text style={styles.buttonText}>Pemilik Properti</Text>
      </TouchableOpacity>
    );
  };
  // button login as pencari
  const renderButtonLoginAsPencari = () => {
    return (
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigateToLoginForm('pencari')}>
        <Text style={styles.buttonText}>Pencari Properti</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.black14}>Login Akun Sebagai</Text>
      </View>
      {renderButtonLoginAsPemilik()}
      {renderButtonLoginAsPencari()}
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
  headerContainer: {
    marginBottom: 16,
  },
  black14: {
    fontSize: 30,
  },
  // button
  buttonContainer: {
    padding: 16,
    width: '70%',
    backgroundColor: PRIMARY,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 8,
  },
  buttonText: {
    color: WHITE,
  },
});

export default LoginScreen;
