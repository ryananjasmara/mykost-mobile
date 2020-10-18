import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';
import {GRAY, PRIMARY, WHITE} from '../../config/colors';
import {capitalizeFirstLetter} from '../../helpers';
import ButtonDefault from '../../components/Button/ButtonDefault';
import Methods from '../../services/api/methods';
import NavigationService from '../../navigation/services';

const RegisterScreen = ({route}) => {
  const [nama, setNama] = useState('');
  const [noHP, setNoHP] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  /** Start Of Lifecycle Section */
  // Did Mount
  useEffect(() => {
    console.log('RegisterScreen.js did mount');
  }, []);
  /** End Of Lifecycle Section */
  /** Start Of Functional Section */
  // Fetch Register
  const fetchRegister = async () => {
    try {
      if (
        nama.length > 0 &&
        noHP.length > 0 &&
        email.length > 0 &&
        password.length > 0
      ) {
        setLoading(true);
        const params = {
          registerType: route.params.registerType,
          nama: nama,
          nomorHandphone: noHP,
          email: email,
          password: password,
        };
        const register = await Methods.register(params);
        setLoading(false);
        Alert.alert(register.message);
        if (register.status === 200) {
          NavigationService.navigate('LoginFormScreen');
        }
      } else {
        Alert.alert('isi form terlebih dahulu');
      }
    } catch (error) {
      Alert.alert(error);
    }
  };
  /** End Of Functional Section */
  /** Start Of Render Section */
  // Header
  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{`Daftar ${capitalizeFirstLetter(
          route.params.registerType,
        )} Properti`}</Text>
      </View>
    );
  };
  // Form Nama
  const renderFormNama = () => {
    return (
      <View style={styles.formSection}>
        <Text style={styles.formLabel}>Nama</Text>
        <TextInput
          style={styles.formTextInput}
          value={nama}
          onChangeText={(text) => setNama(text)}
        />
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
  // Form Password
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
  // Register Button
  const renderRegisterButton = () => {
    return (
      <ButtonDefault
        title={'Daftar'}
        loading={isLoading}
        disabled={isLoading}
        onPress={() => fetchRegister()}
      />
    );
  };
  return (
    <ScrollView style={styles.mainContainer}>
      {renderHeader()}
      <View style={styles.formContainer}>
        {renderFormNama()}
        {renderFormNomorHandphone()}
        {renderFormEmail()}
        {renderFormPassword()}
        {renderRegisterButton()}
      </View>
    </ScrollView>
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
  },
});

export default RegisterScreen;
