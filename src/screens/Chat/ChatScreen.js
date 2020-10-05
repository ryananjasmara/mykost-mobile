import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {WHITE} from '../../config/colors';

const ChatScreen = () => {
  /** Start Of Lifecycle Section */
  // Did Mount
  useEffect(() => {
    console.log('ChatScreen.js did mount');
  }, []);
  /** End Of Lifecycle Section */
  /** Start Of Functional Section */
  /** End Of Functional Section */
  /** Start Of Render Section */
  return (
    <View style={styles.mainContainer}>
      <Text>Chat Screen</Text>
    </View>
  );
  /** End Of Render Section */
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: WHITE,
  },
});

export default ChatScreen;
