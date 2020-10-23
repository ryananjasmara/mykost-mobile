import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {GRAY, PRIMARY, WHITE} from '../../config/colors';
import ButtonDefault from '../../components/Button/ButtonDefault';
import NavigationService from '../../navigation/services';

const TambahIklanScreen = () => {
  const [type, setType] = useState('');
  const [namaProperti, setNamaProperti] = useState('');
  const [namaPemilik, setNamaPemilik] = useState('');
  const [alamatProperti, setAlamatProperti] = useState('');
  const [kotaProperti, setKotaProperti] = useState('');
  const [kecamatanProperti, setKecamatanProperti] = useState('');
  const [kodeposProperti, setKodeposProperti] = useState('');
  const [kontakProperti, setKontakProperti] = useState('');
  /** Start Of Lifecycle Section */
  // Did Mount
  useEffect(() => {
    console.log('TambahIklanScreen.js did mount');
  }, []);
  /** End Of Lifecycle Section */
  /** Start Of Functional Section */
  // Toggle Type
  const toggleType = (newType) => {
    if (newType === type) {
      setType('');
    } else {
      setType(newType);
    }
  };
  // Navigate To TambahIklanScreen2
  const navigateToTambahIklanScreen2 = () => {
    const params = {
      nama_property: namaProperti,
      nama_pemilik: namaPemilik,
      tipe_property: type,
      alamat_property: alamatProperti,
      kota_property: kotaProperti,
      kecamatan_property: kecamatanProperti,
      kodepos_property: kodeposProperti,
      kontak_property: kontakProperti,
    };
    NavigationService.navigate('TambahIklanScreen2', {params});
  };
  /** End Of Functional Section */
  /** Start Of Render Section */
  // Type Section
  const renderTypeSection = () => {
    return (
      <View style={styles.typeSection}>
        <View style={styles.typeHeader}>
          <Text>Pilih Tipe:</Text>
        </View>
        <View style={styles.typeButtonContainer}>
          <TypeButton name={'Kamar Kos'} current={type} />
          <TypeButton name={'Kontrakan'} current={type} />
          <TypeButton name={'Apartment'} current={type} />
          <TypeButton name={'Ruko'} current={type} />
        </View>
      </View>
    );
  };
  // Type Button
  const TypeButton = ({name, current}) => {
    const isActive = name === current;
    return (
      <TouchableOpacity
        style={isActive ? styles.typeButtonActive : styles.typeButton}
        onPress={() => toggleType(name)}>
        <Text style={styles.typeButtonText}>{name}</Text>
      </TouchableOpacity>
    );
  };
  // Form Nama Properti
  const renderFormNamaProperti = () => {
    return (
      <View style={styles.formSection}>
        <Text style={styles.formLabel}>Nama Properti</Text>
        <TextInput
          style={styles.formTextInput}
          value={namaProperti}
          onChangeText={(text) => setNamaProperti(text)}
        />
      </View>
    );
  };
  // Form Nama Pemilik
  const renderFormNamaPemilik = () => {
    return (
      <View style={styles.formSection}>
        <Text style={styles.formLabel}>Nama Pemilik</Text>
        <TextInput
          style={styles.formTextInput}
          value={namaPemilik}
          onChangeText={(text) => setNamaPemilik(text)}
        />
      </View>
    );
  };
  // Form Alamat Properti
  const renderFormAlamatProperti = () => {
    return (
      <View style={styles.formSection}>
        <Text style={styles.formLabel}>Alamat</Text>
        <TextInput
          style={styles.formTextInput}
          value={alamatProperti}
          onChangeText={(text) => setAlamatProperti(text)}
        />
      </View>
    );
  };
  // Form Kota Properti
  const renderFormKotaProperti = () => {
    return (
      <View style={styles.formSection}>
        <Text style={styles.formLabel}>Kota</Text>
        <TextInput
          style={styles.formTextInput}
          value={kotaProperti}
          onChangeText={(text) => setKotaProperti(text)}
        />
      </View>
    );
  };
  // Form Kecamatan Properti
  const renderFormKecamatanProperti = () => {
    return (
      <View style={styles.formSection}>
        <Text style={styles.formLabel}>Kecamatan</Text>
        <TextInput
          style={styles.formTextInput}
          value={kecamatanProperti}
          onChangeText={(text) => setKecamatanProperti(text)}
        />
      </View>
    );
  };
  // Form Kodepos Properti
  const renderFormKodeposProperti = () => {
    return (
      <View style={styles.formSection}>
        <Text style={styles.formLabel}>Kode Pos</Text>
        <TextInput
          style={styles.formTextInput}
          keyboardType="number-pad"
          value={kodeposProperti}
          onChangeText={(text) => setKodeposProperti(text)}
        />
      </View>
    );
  };
  // Form Kontak Properti
  const renderFormKontakProperti = () => {
    return (
      <View style={styles.formSection}>
        <Text style={styles.formLabel}>No Telp</Text>
        <TextInput
          style={styles.formTextInput}
          keyboardType="number-pad"
          value={kontakProperti}
          onChangeText={(text) => setKontakProperti(text)}
        />
      </View>
    );
  };
  // Button Selanjutnya
  const renderButtonSelanjutnya = () => {
    return (
      <View style={{marginBottom: 16, marginHorizontal: 16}}>
        <ButtonDefault
          title="Selanjutnya"
          onPress={() => navigateToTambahIklanScreen2()}
        />
      </View>
    );
  };
  // Form Section
  const renderFormSection = () => {
    return (
      <View style={styles.formContainer}>
        {renderFormNamaProperti()}
        {renderFormNamaPemilik()}
        {renderFormAlamatProperti()}
        {renderFormKotaProperti()}
        {renderFormKecamatanProperti()}
        {renderFormKodeposProperti()}
        {renderFormKontakProperti()}
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        {renderTypeSection()}
        {renderFormSection()}
        {renderButtonSelanjutnya()}
      </ScrollView>
    </View>
  );
  /** End Of Render Section */
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: WHITE,
  },
  // type section
  typeSection: {
    marginTop: 16,
    marginHorizontal: 16,
  },
  typeHeader: {
    marginBottom: 8,
  },
  typeButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  typeButtonActive: {
    width: 75,
    padding: 8,
    backgroundColor: PRIMARY,
    borderRadius: 6,
    alignItems: 'center',
  },
  typeButton: {
    width: 75,
    padding: 8,
    backgroundColor: GRAY,
    borderRadius: 6,
    alignItems: 'center',
  },
  typeButtonText: {
    color: WHITE,
    fontWeight: '500',
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
});

export default TambahIklanScreen;
