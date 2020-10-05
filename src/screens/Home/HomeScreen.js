import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {WHITE, GRAY, PRIMARY, LIGHT_GRAY} from '../../config/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DEFAULT_BANNER} from '../../assets/images';
import NavigationService from '../../navigation/services';

const promoBanner = [
  {
    imageSource: DEFAULT_BANNER,
  },
  {
    imageSource: DEFAULT_BANNER,
  },
  {
    imageSource: DEFAULT_BANNER,
  },
];

const menu = [
  {
    name: 'Kosan',
    icon: 'bed',
  },
  {
    name: 'Kontrakan',
    icon: 'home',
  },
  {
    name: 'Apartment',
    icon: 'business',
  },
  {
    name: 'Ruko',
    icon: 'business-outline',
  },
];

const recommendation = [
  {
    imageSource: DEFAULT_BANNER,
  },
  {
    imageSource: DEFAULT_BANNER,
  },
  {
    imageSource: DEFAULT_BANNER,
  },
  {
    imageSource: DEFAULT_BANNER,
  },
  {
    imageSource: DEFAULT_BANNER,
  },
  {
    imageSource: DEFAULT_BANNER,
  },
];

const HomeScreen = () => {
  /** Start Of Lifecycle Section */
  // Did Mount
  useEffect(() => {
    console.log('HomeScreen.js did mount');
  }, []);
  /** End Of Lifecycle Section */
  /** Start Of Functional Section */
  // Navigate To Jelajah
  const navigateToJelajah = () => {
    NavigationService.navigate('Jelajah');
  };
  /** End Of Functional Section */
  /** Start Of Render Section */
  // Search
  const renderSearch = () => {
    return (
      <View style={styles.searchContainer}>
        <TouchableOpacity
          style={styles.searchBox}
          onPress={() => navigateToJelajah()}>
          <Ionicons
            style={styles.searchIcon}
            name="search"
            size={21}
            color={GRAY}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Lagi Cari Apa?"
            editable={false}
          />
        </TouchableOpacity>
      </View>
    );
  };
  // Promo Banner
  const renderPromoBanner = () => {
    return (
      <View style={styles.bannerContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {renderPromoBannerItem(promoBanner)}
        </ScrollView>
      </View>
    );
  };
  // Promo Banner Item
  const renderPromoBannerItem = (promoBanner) => {
    return promoBanner.map((item, index) => {
      const isLast = index === promoBanner.length - 1;
      return (
        <View
          key={index}
          style={
            isLast
              ? styles.bannerImageContainerLast
              : styles.bannerImageContainer
          }>
          <Image style={styles.bannerImage} source={item.imageSource} />
        </View>
      );
    });
  };
  // Menu
  const renderMenu = () => {
    return (
      <View style={styles.menuContainer}>
        <View>
          <Text>Lagi Cari Apa Hari Ini?</Text>
        </View>
        <View style={styles.menuItemList}>{renderMenuItem(menu)}</View>
      </View>
    );
  };
  // Menu Item
  const renderMenuItem = (menu) => {
    return menu.map((item, index) => {
      return (
        <View key={index} style={styles.menuItemContainer}>
          <View style={styles.menuIconContainer}>
            <Ionicons name={item.icon} size={30} color={GRAY} />
          </View>
          <Text>{item.name}</Text>
        </View>
      );
    });
  };
  // Recommendation
  const renderRecommendation = () => {
    return (
      <View style={styles.recommendationContainer}>
        <View style={styles.recommendationHeader}>
          <Text>Rekomendasi</Text>
        </View>
        <View style={styles.recommendationList}>
          {renderRecommendationItem()}
        </View>
      </View>
    );
  };
  // Recommendation Item
  const renderRecommendationItem = () => {
    return recommendation.map((item, index) => {
      return (
        <Image
          key={index}
          style={styles.recommendationImage}
          source={item.imageSource}
        />
      );
    });
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        {renderSearch()}
        {renderPromoBanner()}
        {renderMenu()}
        {renderRecommendation()}
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
  // promo banner
  bannerContainer: {
    marginVertical: 16,
  },
  bannerImageContainer: {
    marginLeft: 8,
  },
  bannerImageContainerFirst: {
    marginLeft: 16,
  },
  bannerImageContainerLast: {
    marginHorizontal: 16,
  },
  bannerImage: {
    height: 140,
    width: undefined,
    aspectRatio: 2 / 1,
    resizeMode: 'cover',
  },
  // menu
  menuContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  menuItemList: {
    marginTop: 8,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  menuItemContainer: {
    alignItems: 'center',
  },
  menuIconContainer: {
    padding: 4,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: LIGHT_GRAY,
    backgroundColor: LIGHT_GRAY,
    borderRadius: 8,
    marginBottom: 4,
  },
  // recommendation
  recommendationContainer: {
    paddingHorizontal: 16,
  },
  recommendationHeader: {
    marginBottom: 8,
  },
  recommendationList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  recommendationImage: {
    height: 150,
    width: undefined,
    aspectRatio: 1 / 1,
    resizeMode: 'cover',
    marginBottom: 12,
  },
});

export default HomeScreen;
