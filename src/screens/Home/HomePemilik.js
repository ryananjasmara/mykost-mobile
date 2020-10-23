import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {GRAY, PRIMARY, WHITE, LIGHT_GRAY} from '../../config/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DEFAULT_BANNER} from '../../assets/images';
import BalanceInfo from '../../components/BalanceInfo';
import NavigationService from '../../navigation/services';

const myProperti = [
  {
    id: 1,
    imageSource: DEFAULT_BANNER,
  },
  {
    id: 2,
    imageSource: DEFAULT_BANNER,
  },
  {
    id: 3,
    imageSource: DEFAULT_BANNER,
  },
];

const HomePemilik = () => {
  /** Start Of Lifecycle Section */
  /** End Of Lifecycle Section */
  /** Start Of Functional Section */
  // Navigate To Tambah Iklan Screen
  const navigateToTambahIklanScreen = () => {
    NavigationService.navigate('TambahIklanScreen');
  };
  /** End Of Functional Section */
  /** Start Of Render Section */
  // My Properti Grid
  const renderMyPropertiGrid = () => {
    return (
      <View style={styles.myPropertiGrid}>
        {renderMyPropertiItem(myProperti)}
        <TouchableOpacity
          style={styles.myPropertiAdd}
          onPress={() => navigateToTambahIklanScreen()}>
          <Ionicons name="add-circle" size={125} color={PRIMARY} />
        </TouchableOpacity>
      </View>
    );
  };
  // My Properti Item
  const renderMyPropertiItem = (myProperti) => {
    return myProperti.map((item, index) => {
      return (
        <Image
          key={index}
          style={styles.myPropertiItem}
          source={DEFAULT_BANNER}
        />
      );
    });
  };
  // Balance Info
  const renderBalanceInfo = () => {
    return <BalanceInfo />;
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        {renderMyPropertiGrid()}
        {renderBalanceInfo()}
      </ScrollView>
    </SafeAreaView>
  );
  /** End Of Render Section */
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: WHITE,
  },
  // my properti
  myPropertiGrid: {
    marginTop: 16,
    marginBottom: 8,
    marginHorizontal: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  myPropertiItem: {
    height: 150,
    width: undefined,
    aspectRatio: 1 / 1,
    resizeMode: 'cover',
    marginBottom: 12,
    borderRadius: 8,
  },
  myPropertiAdd: {
    height: 150,
    width: undefined,
    aspectRatio: 1 / 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});

export default HomePemilik;
