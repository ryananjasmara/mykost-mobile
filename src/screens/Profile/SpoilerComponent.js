import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {GRAY, PRIMARY} from '../../config/colors';

const SpoilerComponent = ({toggleSpoiler, name, activeSpoiler, content}) => {
  const placeholderContent = (
    <View style={styles.spoilerContentContainer}>
      <Text>Coming Soon...</Text>
    </View>
  );
  const spoilerContent = content || placeholderContent;
  return (
    <TouchableOpacity
      style={styles.spoilerContainer}
      onPress={() => toggleSpoiler(name)}>
      <View style={styles.spoilerMainItem}>
        <Text>{name}</Text>
        <Ionicons
          name={
            activeSpoiler === name ? 'arrow-up-circle' : 'arrow-down-circle'
          }
          size={21}
          color={PRIMARY}
        />
      </View>
      {activeSpoiler === name ? spoilerContent : <View />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
});

export default SpoilerComponent;
