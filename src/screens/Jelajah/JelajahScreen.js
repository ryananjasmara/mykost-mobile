import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {WHITE, GRAY, LIGHT_GRAY, PRIMARY} from '../../config/colors';
import {DEFAULT_BANNER} from '../../assets/images';
import {rupiahFormat} from '../../helpers/index';
// import {useIsFocused} from '@react-navigation/native';

const room = [
  {
    roomName: 'Kosan Halim 1',
    roomAddress: 'Jl. Kembangan Selatan, Gang Merpati Putih No. 9',
    roomPrice: 100000,
    roomImage: DEFAULT_BANNER,
    roomType: 'kosan',
  },
  {
    roomName: 'Kosan Halim 2',
    roomAddress: 'Jl. Kembangan Selatan, Gang Merpati Putih No. 9',
    roomPrice: 200000,
    roomImage: DEFAULT_BANNER,
    roomType: 'kosan',
  },
  {
    roomName: 'Kosan Halim 3',
    roomAddress: 'Jl. Kembangan Selatan, Gang Merpati Putih No. 9',
    roomPrice: 300000,
    roomImage: DEFAULT_BANNER,
    roomType: 'kosan',
  },
  {
    roomName: 'Kosan Halim 4',
    roomAddress: 'Jl. Kembangan Selatan, Gang Merpati Putih No. 9',
    roomPrice: 400000,
    roomImage: DEFAULT_BANNER,
    roomType: 'kosan',
  },
  {
    roomName: 'Kontrakan Makmur',
    roomAddress: 'Jl. Khatib Sutan No. 75',
    roomPrice: 250000,
    roomImage: DEFAULT_BANNER,
    roomType: 'kontrakan',
  },
  {
    roomName: 'Apartemen ThePeak',
    roomAddress: 'Jl. Sudirman No. 101',
    roomPrice: 3000000,
    roomImage: DEFAULT_BANNER,
    roomType: 'apartment',
  },
  {
    roomName: 'Ruko Jaya Raya',
    roomAddress: 'Jl. Sisingamangaraja No. 91',
    roomPrice: 1000000,
    roomImage: DEFAULT_BANNER,
    roomType: 'ruko',
  },
];

// let searchRef;

const JelajahScreen = ({route}) => {
  // const isFocused = useIsFocused();
  const [searchKey, setSearchKey] = useState('');
  const [isFilterRendered, setFilterRendered] = useState(false);
  const [isSortRendered, setSortRendered] = useState(false);
  const [initialRoomData, setInitialRoomData] = useState([]);
  const [roomData, setRoomData] = useState([]);
  /** Start Of Lifecycle Section */
  // Did Mount
  useEffect(() => {
    console.log('JelajahScreen.js did mount');
    setInitialRoomData(room);
    setRoomData(room);
  }, []);
  // Did Update (Route Params)
  useEffect(() => {
    if (route.params) {
      filterRoom(route.params.key.toLowerCase());
    }
  }, [route.params]);
  // Did Update (Searchkey)
  useEffect(() => {
    if (initialRoomData.length > 0) {
      if (searchKey === '') {
        setRoomData(initialRoomData);
      } else {
        const newRoomData = initialRoomData.filter((item) => {
          const roomName = item.roomName.toLowerCase();
          const keyword = searchKey.toLowerCase();
          return roomName.includes(keyword);
        });
        setRoomData(newRoomData);
      }
    }
  }, [searchKey]);
  /** End Of Lifecycle Section */
  /** Start Of Functional Section */
  // filter
  const filterRoom = (type) => {
    setFilterRendered(false);
    const filtered = initialRoomData.filter((item) => {
      if (type === 'semua') {
        return item.roomType;
      } else {
        return item.roomType === type;
      }
    });
    setRoomData(filtered);
  };
  // sort
  const sortRoom = (type) => {
    setSortRendered(false);
    const sorted = roomData.sort((a, b) => {
      return a.roomPrice - b.roomPrice;
    });
    if (type === 'low') {
      setRoomData(sorted);
    } else {
      setRoomData(sorted.reverse());
    }
    setRoomData(sorted);
  };
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
  // Room List
  const renderRoomList = () => {
    return <View style={styles.roomContainer}>{renderRoomItem(roomData)}</View>;
  };
  // Room Item
  const renderRoomItem = (room) => {
    return room.map((item, index) => {
      return (
        <View key={index} style={styles.roomItem}>
          <View>
            <Image style={styles.roomImage} source={DEFAULT_BANNER} />
          </View>
          <View style={styles.roomDetails}>
            <Text>{item.roomName}</Text>
            <Text>{item.roomAddress}</Text>
            <Text>{`${rupiahFormat(item.roomPrice)} / Bulan`}</Text>
          </View>
        </View>
      );
    });
  };
  // bottom section
  const renderBottomSection = () => {
    return (
      <View style={styles.bottomSectionContainer}>
        <TouchableOpacity
          style={styles.bottomSectionItem}
          onPress={() => {
            setFilterRendered(!isFilterRendered);
            setSortRendered(false);
          }}>
          <Ionicons
            style={styles.buttomSectionIcon}
            name="filter"
            size={21}
            color={WHITE}
          />
          <Text style={styles.bottomSectionText}>Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomSectionItem}
          onPress={() => {
            setSortRendered(!isSortRendered);
            setFilterRendered(false);
          }}>
          <Ionicons
            style={styles.buttomSectionIcon}
            name="reorder-four"
            size={21}
            color={WHITE}
          />
          <Text style={styles.bottomSectionText}>Urutkan</Text>
        </TouchableOpacity>
      </View>
    );
  };
  // filter
  const renderFilter = () => {
    return isFilterRendered ? (
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={styles.filterItem}
          onPress={() => filterRoom('kosan')}>
          <Text>Kosan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterItem}
          onPress={() => filterRoom('kontrakan')}>
          <Text>Kontrakan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterItem}
          onPress={() => filterRoom('apartment')}>
          <Text>Apartment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterItem}
          onPress={() => filterRoom('ruko')}>
          <Text>Ruko</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterItem}
          onPress={() => filterRoom('semua')}>
          <Text>Semua</Text>
        </TouchableOpacity>
      </View>
    ) : (
      <View />
    );
  };
  // sort
  const renderSort = () => {
    return isSortRendered ? (
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={styles.filterItem}
          onPress={() => sortRoom('low')}>
          <Text>Harga Termurah</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterItem}
          onPress={() => sortRoom('high')}>
          <Text>Harga Termahal</Text>
        </TouchableOpacity>
      </View>
    ) : (
      <View />
    );
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      {renderSearch()}
      <ScrollView>{renderRoomList()}</ScrollView>
      {renderSort()}
      {renderFilter()}
      {renderBottomSection()}
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
  // room
  roomContainer: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  roomItem: {
    flexDirection: 'row',
    marginBottom: 8,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: LIGHT_GRAY,
  },
  roomImage: {
    height: 100,
    width: undefined,
    aspectRatio: 1 / 1,
    resizeMode: 'cover',
  },
  roomDetails: {
    flex: 1,
    marginLeft: 8,
  },
  // bottom section
  bottomSectionContainer: {
    flexDirection: 'row',
  },
  bottomSectionItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: PRIMARY,
  },
  buttomSectionIcon: {
    marginRight: 8,
  },
  bottomSectionText: {
    color: WHITE,
  },
  // filter
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: LIGHT_GRAY,
  },
  filterItem: {
    flex: 1,
    padding: 8,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: WHITE,
    alignItems: 'center',
  },
});

export default JelajahScreen;
