import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {WHITE, GRAY} from '../../config/colors';
import {useStoreState, useStoreActions} from 'easy-peasy';
import ButtonDefault from '../../components/Button/ButtonDefault';
import {DEFAULT_BANNER} from '../../assets/images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SpoilerComponent from './SpoilerComponent';
import BalanceInfo from '../../components/BalanceInfo';

const ProfilePemilik = () => {
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
  // Balance Info
  const renderBalanceInfo = () => {
    return <BalanceInfo />;
  };
  // Spoilers
  const renderSpoilers = () => {
    return (
      <View style={styles.spoilerSection}>
        <SpoilerComponent
          toggleSpoiler={toggleSpoiler}
          name="Promote Push"
          activeSpoiler={activeSpoiler}
        />
        <SpoilerComponent
          toggleSpoiler={toggleSpoiler}
          name="Syarat & Ketentuan"
          activeSpoiler={activeSpoiler}
        />
        <SpoilerComponent
          toggleSpoiler={toggleSpoiler}
          name="Kebijakan Privasi"
          activeSpoiler={activeSpoiler}
        />
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
      {renderBalanceInfo()}
      {renderSpoilers()}
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

export default ProfilePemilik;
