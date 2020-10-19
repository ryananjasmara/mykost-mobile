import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {WHITE, GRAY, PRIMARY} from '../../config/colors';
import LoginScreen from '../Login/LoginScreen';
import {useStoreState, useStoreActions} from 'easy-peasy';
import ButtonDefault from '../../components/Button/ButtonDefault';
import {DEFAULT_BANNER} from '../../assets/images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {rupiahFormat, thousandSeparator} from '../../helpers';

const ProfileScreen = () => {
  const user = useStoreState((state) => state.user);
  const clearUser = useStoreActions((actions) => actions.clearUser);
  const [activeSpoiler, setActiveSpoiler] = useState('');
  console.log(user);
  /** Start Of Lifecycle Section */
  // Did Mount
  useEffect(() => {
    console.log('ProfileScreen.js did mount');
  }, []);
  /** End Of Lifecycle Section */
  /** Start Of Functional Section */
  // toggle spoiler
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
            style={[
              styles.profileHeaderText,
              {marginBottom: 8},
            ]}>{`Nama: ${user.data.nama}`}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
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
      <View style={styles.transaksiContainer}>
        <View style={styles.transaksiHeader}>
          <Text style={styles.transaksiText}>Transaksi</Text>
        </View>
        {renderMenungguPembayaran()}
        {renderUlasan()}
        {renderKomplain()}
      </View>
    );
  };
  // Menunggu Pembayaran
  const renderMenungguPembayaran = () => {
    return (
      <TouchableOpacity
        style={styles.spoilerContainer}
        onPress={() => toggleSpoiler('menunggu_pembayaran')}>
        <View style={styles.spoilerMainItem}>
          <Text>Menunggu Pembayaran</Text>
          <Ionicons
            name={
              activeSpoiler === 'menunggu_pembayaran'
                ? 'arrow-up-circle'
                : 'arrow-down-circle'
            }
            size={21}
            color={PRIMARY}
          />
        </View>
        {activeSpoiler === 'menunggu_pembayaran' ? (
          <View style={styles.spoilerContentContainer}>
            <Text>Coming Soon...</Text>
          </View>
        ) : (
          <View />
        )}
      </TouchableOpacity>
    );
  };
  // Ulasan
  const renderUlasan = () => {
    return (
      <TouchableOpacity
        style={styles.spoilerContainer}
        onPress={() => toggleSpoiler('ulasan')}>
        <View style={styles.spoilerMainItem}>
          <Text>Ulasan</Text>
          <Ionicons
            name={
              activeSpoiler === 'ulasan'
                ? 'arrow-up-circle'
                : 'arrow-down-circle'
            }
            size={21}
            color={PRIMARY}
          />
        </View>
        {activeSpoiler === 'ulasan' ? (
          <View style={styles.spoilerContentContainer}>
            <Text>Coming Soon...</Text>
          </View>
        ) : (
          <View />
        )}
      </TouchableOpacity>
    );
  };
  // Komplain
  const renderKomplain = () => {
    return (
      <TouchableOpacity
        style={styles.spoilerContainer}
        onPress={() => toggleSpoiler('komplain')}>
        <View style={styles.spoilerMainItem}>
          <Text>Komplain</Text>
          <Ionicons
            name={
              activeSpoiler === 'komplain'
                ? 'arrow-up-circle'
                : 'arrow-down-circle'
            }
            size={21}
            color={PRIMARY}
          />
        </View>
        {activeSpoiler === 'komplain' ? (
          <View style={styles.spoilerContentContainer}>
            <Text>Coming Soon...</Text>
          </View>
        ) : (
          <View />
        )}
      </TouchableOpacity>
    );
  };
  // Favorit
  const renderFavorit = () => {
    return (
      <View style={styles.transaksiContainer}>
        <View style={styles.transaksiHeader}>
          <Text style={styles.transaksiText}>Favorit</Text>
        </View>
        {renderTerakhirDilihat()}
        {renderPropertiFavorit()}
      </View>
    );
  };
  // Terakhir Dilihat
  const renderTerakhirDilihat = () => {
    return (
      <TouchableOpacity
        style={styles.spoilerContainer}
        onPress={() => toggleSpoiler('terakhir_dilihat')}>
        <View style={styles.spoilerMainItem}>
          <Text>Terakhir Dilihat</Text>
          <Ionicons
            name={
              activeSpoiler === 'terakhir_dilihat'
                ? 'arrow-up-circle'
                : 'arrow-down-circle'
            }
            size={21}
            color={PRIMARY}
          />
        </View>
        {activeSpoiler === 'terakhir_dilihat' ? (
          <View style={styles.spoilerContentContainer}>
            <Text>Coming Soon...</Text>
          </View>
        ) : (
          <View />
        )}
      </TouchableOpacity>
    );
  };
  // Properti Favorit
  const renderPropertiFavorit = () => {
    return (
      <TouchableOpacity
        style={styles.spoilerContainer}
        onPress={() => toggleSpoiler('properti_favorit')}>
        <View style={styles.spoilerMainItem}>
          <Text>Properti Favorit</Text>
          <Ionicons
            name={
              activeSpoiler === 'properti_favorit'
                ? 'arrow-up-circle'
                : 'arrow-down-circle'
            }
            size={21}
            color={PRIMARY}
          />
        </View>
        {activeSpoiler === 'properti_favorit' ? (
          <View style={styles.spoilerContentContainer}>
            <Text>Coming Soon...</Text>
          </View>
        ) : (
          <View />
        )}
      </TouchableOpacity>
    );
  };
  // My Kost Care
  const renderMykostCare = () => {
    return (
      <View style={styles.transaksiContainer}>
        <View style={styles.transaksiHeader}>
          <Text style={styles.transaksiText}>MYKost Care</Text>
        </View>
        {renderPusatBantuan()}
      </View>
    );
  };
  // Pusat Bantuan
  const renderPusatBantuan = () => {
    return (
      <TouchableOpacity
        style={styles.spoilerContainer}
        onPress={() => toggleSpoiler('pusat_bantuan')}>
        <View style={styles.spoilerMainItem}>
          <Text>Pusat Bantuan</Text>
          <Ionicons
            name={
              activeSpoiler === 'pusat_bantuan'
                ? 'arrow-up-circle'
                : 'arrow-down-circle'
            }
            size={21}
            color={PRIMARY}
          />
        </View>
        {activeSpoiler === 'pusat_bantuan' ? (
          <View style={styles.spoilerContentContainer}>
            <Text>Coming Soon...</Text>
          </View>
        ) : (
          <View />
        )}
      </TouchableOpacity>
    );
  };
  // Kebijakan Privasi
  const renderKebijakanPrivasi = () => {
    return (
      <TouchableOpacity
        style={styles.spoilerContainer}
        onPress={() => toggleSpoiler('kebijakan_privasi')}>
        <View style={styles.spoilerMainItem}>
          <Text>Kebijakan Privasi</Text>
          <Ionicons
            name={
              activeSpoiler === 'kebijakan_privasi'
                ? 'arrow-up-circle'
                : 'arrow-down-circle'
            }
            size={21}
            color={PRIMARY}
          />
        </View>
        {activeSpoiler === 'kebijakan_privasi' ? (
          <View style={styles.spoilerContentContainer}>
            <Text>Coming Soon...</Text>
          </View>
        ) : (
          <View />
        )}
      </TouchableOpacity>
    );
  };
  // Syarat Ketentuan
  const renderSyaratKetentuan = () => {
    return (
      <TouchableOpacity
        style={styles.spoilerContainer}
        onPress={() => toggleSpoiler('syarat_ketentuan')}>
        <View style={styles.spoilerMainItem}>
          <Text>Syarat & Ketentuan</Text>
          <Ionicons
            name={
              activeSpoiler === 'syarat_ketentuan'
                ? 'arrow-up-circle'
                : 'arrow-down-circle'
            }
            size={21}
            color={PRIMARY}
          />
        </View>
        {activeSpoiler === 'syarat_ketentuan' ? (
          <View style={styles.spoilerContentContainer}>
            <Text>Coming Soon...</Text>
          </View>
        ) : (
          <View />
        )}
      </TouchableOpacity>
    );
  };
  // Promote Push
  const renderPromotePush = () => {
    return (
      <TouchableOpacity
        style={styles.spoilerContainer}
        onPress={() => toggleSpoiler('promote_push')}>
        <View style={styles.spoilerMainItem}>
          <Text>Promote Push</Text>
          <Ionicons
            name={
              activeSpoiler === 'promote_push'
                ? 'arrow-up-circle'
                : 'arrow-down-circle'
            }
            size={21}
            color={PRIMARY}
          />
        </View>
        {activeSpoiler === 'promote_push' ? (
          <View style={styles.spoilerContentContainer}>
            <Text>Coming Soon...</Text>
          </View>
        ) : (
          <View />
        )}
      </TouchableOpacity>
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
  // Pemilik Spoiler
  const renderPemilikSpoiler = () => {
    return (
      <View style={styles.transaksiContainer}>
        {renderPromotePush()}
        {renderSyaratKetentuan()}
        {renderKebijakanPrivasi()}
        {renderPusatBantuan()}
      </View>
    );
  };
  // Login Screen
  const renderLoginScreen = () => {
    return <LoginScreen />;
  };
  // Profile Pencari
  const renderProfilePencari = () => {
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
  };
  // Profile Pemilik
  const renderProfilePemilik = () => {
    return (
      <ScrollView style={styles.mainContainer}>
        {renderProfileHeader()}
        {renderBalanceInfo()}
        {renderPemilikSpoiler()}
        {renderLogoutButton()}
      </ScrollView>
    );
  };
  // Profile Screen
  const renderProfileScreen = () => {
    if (user.data.tipe === 'pemilik') {
      return renderProfilePemilik();
    } else if (user.data.tipe === 'pencari') {
      return renderProfilePencari();
    }
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
  profileHeaderText: {
    fontSize: 14,
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
  // transaksi
  transaksiContainer: {
    marginBottom: 16,
    marginHorizontal: 16,
  },
  transaksiHeader: {
    marginBottom: 8,
  },
  transaksiText: {
    fontSize: 16,
    fontWeight: '500',
  },
  spoilerContainer: {
    padding: 12,
    borderWidth: 1,
    borderColor: GRAY,
    borderRadius: 6,
    marginBottom: 8,
  },
  spoilerMainItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  spoilerContentContainer: {
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: GRAY,
  },
  logoutButton: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
});

export default ProfileScreen;
