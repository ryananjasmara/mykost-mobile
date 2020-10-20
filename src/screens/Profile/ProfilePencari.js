import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {WHITE, GRAY, PRIMARY} from '../../config/colors';
import {useStoreState, useStoreActions} from 'easy-peasy';
import ButtonDefault from '../../components/Button/ButtonDefault';
import {DEFAULT_BANNER} from '../../assets/images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {rupiahFormat, thousandSeparator} from '../../helpers';
import SpoilerComponent from './SpoilerComponent';

const ProfilePencari = () => {
  const user = useStoreState((state) => state.user);
  const clearUser = useStoreActions((actions) => actions.clearUser);
  const [activeSpoiler, setActiveSpoiler] = useState('');
  /** Start Of Lifecycle Section */
  /** End Of Lifecycle Section */
  /** Start Of Functional Section */
  // Toggle Spoiler
  const toggleSpoiler = (name) => {
    if (activeSpoiler === name) {
      setActiveSpoiler('');
    } else {
      setActiveSpoiler(name);
    }
  };
  /** End Of Functional Section */
  /** Start Of Render Section */
  // Profile Header
  const renderProfileHeader = () => {
    return (
      <View style={styles.profileHeaderContainer}>
        <View>
          <Image source={DEFAULT_BANNER} style={styles.profileHeaderAvatar} />
        </View>
        <View style={styles.profileHeaderInfo}>
          <Text
            style={styles.profileHeaderText}>{`Nama: ${user.data.nama}`}</Text>
          <View style={styles.profileHeaderDetail}>
            <Text
              style={
                styles.profileHeaderText
              }>{`No Telp: ${user.data.kontak}`}</Text>
            <View>
              <Ionicons name="create-outline" size={21} color={GRAY} />
            </View>
          </View>
        </View>
      </View>
    );
  };
  // Tagihan
  const renderTagihan = () => {
    return (
      <View style={styles.tagihanContainer}>
        <View>
          <Text>Tagihan</Text>
        </View>
      </View>
    );
  };
  // Balance Info
  const renderBalanceInfo = () => {
    return (
      <View style={styles.balanceInfoContainer}>
        <View style={styles.balanceSectionContainer}>
          <View style={styles.balanceSubContainer}>
            <Text style={styles.balanceText}>Saldo</Text>
            <Ionicons name="wallet-outline" size={21} color={PRIMARY} />
          </View>
          <Text style={styles.balanceValueText}>
            {rupiahFormat(parseInt(user.data.saldo))}
          </Text>
        </View>
        <View style={styles.balanceSectionContainer}>
          <View style={styles.balanceSubContainer}>
            <Text style={styles.balanceText}>Poin</Text>
            <Ionicons name="card-outline" size={21} color={PRIMARY} />
          </View>
          <Text style={styles.balanceValueText}>
            {thousandSeparator(parseInt(user.data.poin))}
          </Text>
        </View>
      </View>
    );
  };
  // Transaksi
  const renderTransaksi = () => {
    return (
      <View style={styles.spoilerSection}>
        <View style={styles.spoilerSectionHeader}>
          <Text style={styles.spoilerSectionText}>Transaksi</Text>
        </View>
        <SpoilerComponent
          toggleSpoiler={toggleSpoiler}
          name="Menunggu Pembayaran"
          activeSpoiler={activeSpoiler}
        />
        <SpoilerComponent
          toggleSpoiler={toggleSpoiler}
          name="Ulasan"
          activeSpoiler={activeSpoiler}
        />
        <SpoilerComponent
          toggleSpoiler={toggleSpoiler}
          name="Komplain"
          activeSpoiler={activeSpoiler}
        />
      </View>
    );
  };
  // Favorit
  const renderFavorit = () => {
    return (
      <View style={styles.spoilerSection}>
        <View style={styles.spoilerSectionHeader}>
          <Text style={styles.spoilerSectionText}>Favorit</Text>
        </View>
        <SpoilerComponent
          toggleSpoiler={toggleSpoiler}
          name="Terakhir Dilihat"
          activeSpoiler={activeSpoiler}
        />
        <SpoilerComponent
          toggleSpoiler={toggleSpoiler}
          name="Properti Favorit"
          activeSpoiler={activeSpoiler}
        />
      </View>
    );
  };
  // My Kost Care
  const renderMykostCare = () => {
    return (
      <View style={styles.spoilerSection}>
        <View style={styles.spoilerSectionHeader}>
          <Text style={styles.spoilerSectionText}>MYKost Care</Text>
        </View>
        <SpoilerComponent
          toggleSpoiler={toggleSpoiler}
          name="Pusat Bantuan"
          activeSpoiler={activeSpoiler}
        />
      </View>
    );
  };
  // Logout Button
  const renderLogoutButton = () => {
    return (
      <View style={styles.logoutButton}>
        <ButtonDefault title={'Logout'} onPress={() => clearUser()} />
      </View>
    );
  };

  return (
    <ScrollView style={styles.mainContainer}>
      {renderProfileHeader()}
      {renderTagihan()}
      {renderBalanceInfo()}
      {renderTransaksi()}
      {renderFavorit()}
      {renderMykostCare()}
      {renderLogoutButton()}
    </ScrollView>
  );
  /** End Of Render Section */
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: WHITE,
  },
  // profile header
  profileHeaderContainer: {
    margin: 32,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileHeaderAvatar: {
    height: 70,
    width: undefined,
    aspectRatio: 1 / 1,
    resizeMode: 'cover',
    borderRadius: 40,
  },
  profileHeaderInfo: {
    marginLeft: 24,
    flex: 1,
  },
  profileHeaderDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileHeaderText: {
    fontSize: 14,
    marginBottom: 8,
  },
  // tagihan
  tagihanContainer: {
    marginHorizontal: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: GRAY,
    borderRadius: 6,
    marginBottom: 16,
    minHeight: 100,
  },
  // balance info
  balanceInfoContainer: {
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: GRAY,
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  balanceText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
    color: PRIMARY,
  },
  balanceSectionContainer: {
    alignItems: 'center',
  },
  balanceSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  balanceValueText: {
    fontSize: 15,
    color: GRAY,
  },
  // spoiler section
  spoilerSection: {
    marginBottom: 16,
    marginHorizontal: 16,
  },
  spoilerSectionHeader: {
    marginBottom: 8,
  },
  spoilerSectionText: {
    fontSize: 16,
    fontWeight: '500',
  },
  // logout
  logoutButton: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
});

export default ProfilePencari;
