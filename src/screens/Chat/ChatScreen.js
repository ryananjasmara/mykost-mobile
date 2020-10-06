import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {WHITE, GRAY, PRIMARY, LIGHT_GRAY} from '../../config/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DEFAULT_BANNER} from '../../assets/images';
import {cutLongString} from '../../helpers/index';
import NavigationService from '../../navigation/services';

const allChat = [
  {
    personName: 'Ryan',
    personAvatar: DEFAULT_BANNER,
    lastMessage: 'Halo Apa Kabar?',
  },
  {
    personName: 'Deni',
    personAvatar: DEFAULT_BANNER,
    lastMessage:
      'Jadi begini, ini tentang hal yang kemarin kita bahas, kenapa jeruk itu warnanya kuning? ini ditujukan hanya untuk mengetest seberapa pantaskah',
  },
  {
    personName: 'Rudi',
    personAvatar: DEFAULT_BANNER,
    lastMessage: 'Izinkan aku!',
  },
];

const unreadChat = [
  {
    personName: 'Riva',
    personAvatar: DEFAULT_BANNER,
    lastMessage: 'Halo Apa Kabar?',
  },
  {
    personName: 'Faustine',
    personAvatar: DEFAULT_BANNER,
    lastMessage:
      'Jadi begini, ini tentang hal yang kemarin kita bahas, kenapa jeruk itu warnanya kuning? ini ditujukan hanya untuk mengetest seberapa pantaskah',
  },
  {
    personName: 'Gisa',
    personAvatar: DEFAULT_BANNER,
    lastMessage: 'Izinkan aku!',
  },
];

const ChatScreen = () => {
  const [searchKey, setSearchKey] = useState('');
  const [currentTab, setCurrentTab] = useState('semua');
  const [chatData, setChatData] = useState([]);
  /** Start Of Lifecycle Section */
  // Did Mount
  useEffect(() => {
    console.log('ChatScreen.js did mount');
    setChatData(allChat);
  }, []);
  // Change Tab
  const changeTab = (tab) => {
    setCurrentTab(tab);
    if (tab === 'semua') {
      setChatData(allChat);
    } else {
      setChatData(unreadChat);
    }
  };
  // Navigate To Chat Detail
  const navigateToChatDetail = (personName) => {
    NavigationService.navigate('ChatDetailScreen', {name: personName});
  };
  /** End Of Lifecycle Section */
  /** Start Of Functional Section */
  /** End Of Functional Section */
  /** Start Of Render Section */
  // Search
  const renderSearch = () => {
    return (
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Ionicons
            style={styles.searchIcon}
            name="search"
            size={21}
            color={GRAY}
          />
          <TextInput
            // ref={(input) => (searchRef = input)}
            style={styles.searchInput}
            onChangeText={(text) => setSearchKey(text)}
            value={searchKey}
            placeholder="Lagi Cari Apa?"
          />
        </View>
      </View>
    );
  };
  // Tabs
  const renderTabs = () => {
    const isAll = currentTab === 'semua';
    const isUnread = currentTab === 'belum_dibaca';
    return (
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={isAll ? styles.tabsItemActive : styles.tabsItem}
          onPress={() => changeTab('semua')}>
          <Text style={isAll ? styles.tabsTextActive : styles.tabsText}>
            Semua
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={isUnread ? styles.tabsItemActive : styles.tabsItem}
          onPress={() => changeTab('belum_dibaca')}>
          <Text style={isUnread ? styles.tabsTextActive : styles.tabsText}>
            Belum Dibaca
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  // Chat List
  const renderChatList = () => {
    return (
      <View style={styles.chatListContainer}>{renderChatItem(chatData)}</View>
    );
  };
  // Chat Item
  const renderChatItem = (chat) => {
    return chat.map((item, index) => {
      return (
        <TouchableOpacity
          key={index}
          style={styles.chatItem}
          onPress={() => navigateToChatDetail(item.personName)}>
          <View style={styles.chatAvatarContainer}>
            <Image style={styles.chatAvatar} source={DEFAULT_BANNER} />
          </View>
          <View style={styles.chatDetailsContainer}>
            <Text style={styles.chatNameText}>{item.personName}</Text>
            <Text>{cutLongString(item.lastMessage)}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      {renderSearch()}
      {renderTabs()}
      <ScrollView>{renderChatList()}</ScrollView>
    </SafeAreaView>
  );
  /** End Of Render Section */
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: WHITE,
  },
  // search
  searchContainer: {
    padding: 16,
    backgroundColor: PRIMARY,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: WHITE,
    borderColor: PRIMARY,
    borderWidth: 1,
    borderRadius: 4,
  },
  searchIcon: {
    padding: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 5,
    paddingRight: 10,
    paddingLeft: 0,
    backgroundColor: WHITE,
    color: GRAY,
  },
  // tabs
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: LIGHT_GRAY,
  },
  tabsItemActive: {
    flex: 1,
    padding: 16,
    backgroundColor: PRIMARY,
    alignItems: 'center',
    borderRightWidth: 0.5,
    borderLeftWidth: 0.5,
    borderRightColor: LIGHT_GRAY,
    borderLeftColor: LIGHT_GRAY,
  },
  tabsItem: {
    flex: 1,
    padding: 16,
    backgroundColor: GRAY,
    alignItems: 'center',
    borderRightWidth: 0.5,
    borderLeftWidth: 0.5,
    borderRightColor: LIGHT_GRAY,
    borderLeftColor: LIGHT_GRAY,
  },
  tabsText: {
    color: WHITE,
  },
  tabsTextActive: {
    color: WHITE,
    textDecorationLine: 'underline',
  },
  // chat list
  chatListContainer: {
    marginTop: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: LIGHT_GRAY,
  },
  chatAvatarContainer: {
    marginRight: 16,
  },
  chatAvatar: {
    height: 70,
    width: undefined,
    aspectRatio: 1 / 1,
    resizeMode: 'cover',
    borderRadius: 40,
  },
  chatDetailsContainer: {
    flex: 1,
  },
  chatNameText: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
});

export default ChatScreen;
