import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {GRAY, PRIMARY, WHITE} from '../../config/colors';
import ButtonDefault from '../../components/Button/ButtonDefault';

const TambahIklanScreen2 = ({route}) => {
  const [genderType, setGenderType] = useState('');
  const [hargaSewa, setHargaSewa] = useState(0);
  const [luas, setLuas] = useState(0);
  const [fasilitas, setFasilitas] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [jumlahUnit, setJumlahUnit] = useState(0);
  /** Start Of Lifecycle Section */
  // Did Mount
  useEffect(() => {
    console.log('TambahIklanScreen2.js did mount');
    console.log(route.params);
  }, []);
  /** End Of Lifecycle Section */
  /** Start Of Functional Section */
  // Toggle Type
  const toggleType = (newType) => {
    if (newType === genderType) {
      setGenderType('');
    } else {
      setGenderType(newType);
    }
  };
  // Save Data To Database
  const saveData = () => {
    const params = {
      ...route.params,
      gender_property: genderType,
      harga_sewa_property: hargaSewa,
      luas_unit_property: luas,
      fasilitas_property: fasilitas,
      deskripsi_property: deskripsi,
      jumlah_unit_property: jumlahUnit,
    };
  };
  /** End Of Functional Section */
  /** Start Of Render Section */
  // Type Section
  const renderTypeSection = () => {
    return (
      <View style={styles.typeSection}>
        <View style={styles.typeHeader}>
          <Text>Jenis Penghuni:</Text>
        </View>
        <View style={styles.typeButtonContainer}>
          <TypeButton name={'Campur'} current={genderType} />
          <TypeButton name={'Putra'} current={genderType} />
          <TypeButton name={'Putri'} current={genderType} />
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
  // Form Harga Sewa
  const renderFormHargaSewa = () => {
    return (
      <View style={styles.formSection}>
        <Text style={styles.formLabel}>Harga Sewa</Text>
        <TextInput
          style={styles.formTextInput}
          value={hargaSewa}
          keyboardType="number-pad"
          onChangeText={(text) => setHargaSewa(text)}
        />
      </View>
    );
  };
  // Form Luas Unit
  const renderFormLuasUnit = () => {
    return (
      <View style={styles.formSection}>
        <Text style={styles.formLabel}>Luas Unit</Text>
        <TextInput
          style={styles.formTextInput}
          value={luas}
          keyboardType="number-pad"
          onChangeText={(text) => setLuas(text)}
        />
      </View>
    );
  };
  // Form Fasilitas
  const renderFormFasilitas = () => {
    return (
      <View style={styles.formSection}>
        <Text style={styles.formLabel}>Fasilitas</Text>
        <TextInput
          style={styles.formTextInput}
          value={fasilitas}
          onChangeText={(text) => setFasilitas(text)}
        />
      </View>
    );
  };
  // Form Deskripsi
  const renderFormDeskripsi = () => {
    return (
      <View style={styles.formSection}>
        <Text style={styles.formLabel}>Deskripsi</Text>
        <TextInput
          style={styles.formTextInput}
          value={deskripsi}
          onChangeText={(text) => setDeskripsi(text)}
        />
      </View>
    );
  };
  // Form Jumlah Unit
  const renderFormJumlahUnit = () => {
    return (
      <View style={styles.formSection}>
        <Text style={styles.formLabel}>Jumlah Unit</Text>
        <TextInput
          style={styles.formTextInput}
          value={jumlahUnit}
          onChangeText={(text) => setJumlahUnit(text)}
        />
      </View>
    );
  };
  // Button Simpan
  const renderButtonSimpan = () => {
    return (
      <View style={{marginBottom: 16, marginHorizontal: 16}}>
        <ButtonDefault title="Simpan" />
      </View>
    );
  };
  // Form Section
  const renderFormSection = () => {
    return (
      <View style={styles.formContainer}>
        {renderFormHargaSewa()}
        {renderFormLuasUnit()}
        {renderFormFasilitas()}
        {renderFormDeskripsi()}
        {renderFormJumlahUnit()}
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        {renderTypeSection()}
        {renderFormSection()}
        {renderButtonSimpan()}
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

export default TambahIklanScreen2;
