import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {GRAY, PRIMARY, WHITE} from '../../config/colors';
import {capitalizeFirstLetter} from '../../helpers';

const LoginFormScreen = ({route}) => {
  const [noHP, setNoHP] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  /** Start Of Lifecycle Section */
  // Did Mount
  useEffect(() => {
    console.log('LoginFormScreen.js did mount');
  }, []);
  /** End Of Lifecycle Section */
  /** Start Of Functional Section */
  /** End Of Functional Section */
  /** Start Of Render Section */
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{`Login ${capitalizeFirstLetter(
          route.params.loginType,
        )} Properti`}</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.formSection}>
          <Text style={styles.formLabel}>Nomor Handphone</Text>
          <TextInput
            style={styles.formTextInput}
            keyboardType="number-pad"
            value={noHP}
            onChangeText={(text) => setNoHP(text)}
          />
        </View>
        <View style={styles.formSection}>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput
            style={styles.formTextInput}
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.formSection}>
          <Text style={styles.formLabel}>Password</Text>
          <TextInput
            style={styles.formTextInput}
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Login</Text>
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Belum punya akun MYKost?</Text>
          <TouchableOpacity>
            <Text style={styles.registerText}>Daftar disini</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  /** End Of Render Section */
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: WHITE,
  },
  headerContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
  },
  formContainer: {
    marginTop: 32,
    paddingHorizontal: 32,
  },
  formSection: {
    marginBottom: 16,
  },
  formLabel: {
    marginBottom: 8,
  },
  formTextInput: {
    height: 40,
    borderBottomColor: GRAY,
    borderBottomWidth: 1,
    padding: 8,
  },
  buttonContainer: {
    marginTop: 16,
    backgroundColor: PRIMARY,
    paddingVertical: 16,
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText: {
    color: WHITE,
  },
  footerContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
  },
  registerText: {
    marginTop: 8,
    fontSize: 14,
    color: PRIMARY,
  },
});

export default LoginFormScreen;
