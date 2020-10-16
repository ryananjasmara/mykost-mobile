import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {GRAY, PRIMARY, WHITE} from '../../config/colors';
import {capitalizeFirstLetter} from '../../helpers';
import NavigationService from '../../navigation/services';
import Methods from '../../services/api/methods';
import ButtonDefault from '../../components/Button/ButtonDefault';

const LoginFormScreen = ({route}) => {
  const [noHP, setNoHP] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  /** Start Of Lifecycle Section */
  // Did Mount
  useEffect(() => {
    console.log('LoginFormScreen.js did mount');
  }, []);
  /** End Of Lifecycle Section */
  /** Start Of Functional Section */
  // Navigate To Login Form
  const navigateToRegister = (registerType) => {
    NavigationService.navigate('RegisterScreen', {registerType});
  };
  // ValidateLogin
  const validateLogin = async () => {
    if (noHP.length > 0 && email.length > 0 && password.length > 0) {
      setLoading(true);
      const params = {
        loginType: route.params.loginType,
        nomorHandphone: noHP,
        email: email,
        password: password,
      };
      const login = await Methods.login(params);
      console.log(login);
      setLoading(false);
    } else {
      Alert.alert('isi form terlebih dahulu');
    }
  };
  /** End Of Functional Section */
  /** Start Of Render Section */
  // Header
  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{`Login ${capitalizeFirstLetter(
          route.params.loginType,
        )} Properti`}</Text>
      </View>
    );
  };
  // Form Nomor Handphone
  const renderFormNomorHandphone = () => {
    return (
      <View style={styles.formSection}>
        <Text style={styles.formLabel}>Nomor Handphone</Text>
        <TextInput
          style={styles.formTextInput}
          keyboardType="number-pad"
          value={noHP}
          onChangeText={(text) => setNoHP(text)}
        />
      </View>
    );
  };
  // Form Email
  const renderFormEmail = () => {
    return (
      <View style={styles.formSection}>
        <Text style={styles.formLabel}>Email</Text>
        <TextInput
          style={styles.formTextInput}
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
    );
  };
  const renderFormPassword = () => {
    return (
      <View style={styles.formSection}>
        <Text style={styles.formLabel}>Password</Text>
        <TextInput
          style={styles.formTextInput}
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
    );
  };
  // Login Button
  const renderLoginButton = () => {
    return (
      <ButtonDefault
        title={'Login'}
        loading={isLoading}
        disabled={isLoading}
        onPress={() => validateLogin()}
      />
    );
  };
  // Footer
  const renderFooter = () => {
    return (
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Belum punya akun MYKost?</Text>
        <TouchableOpacity
          onPress={() => navigateToRegister(route.params.loginType)}>
          <Text style={styles.registerText}>Daftar Disini</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.mainContainer}>
      {renderHeader()}
      <View style={styles.formContainer}>
        {renderFormNomorHandphone()}
        {renderFormEmail()}
        {renderFormPassword()}
        {renderLoginButton()}
        {renderFooter()}
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
    textDecorationLine: 'underline',
  },
});

export default LoginFormScreen;
