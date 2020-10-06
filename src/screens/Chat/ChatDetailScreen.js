import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput} from 'react-native';
import moment from 'moment';
import {WHITE, GRAY, PRIMARY, LIGHT_GRAY} from '../../config/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const messages = [
  {
    date: '2020-10-09 05:57:27.000000',
    content: 'Halo',
    type: 'sender',
  },
  {
    date: '2020-10-09 05:57:27.000000',
    content: 'Cek',
    type: 'sender',
  },
  {
    date: '2020-10-09 05:57:27.000000',
    content: 'test kalau text nya panjang jadi gimana test kalau text nya panjang jadi gimana test kalau text nya panjang jadi gimana test kalau text nya panjang jadi gimana',
    type: 'sender',
  },
  {
    date: '2020-10-09 05:57:27.000000',
    content:
      'test kalau text nya panjang jadi gimana test kalau text nya panjang jadi gimana test kalau text nya panjang jadi gimana test kalau text nya panjang jadi gimana',
    type: 'me',
  },
  {
    date: '2020-10-09 05:57:27.000000',
    content: 'test',
    type: 'me',
  },
  {
    date: '2020-10-09 05:57:27.000000',
    content: 'test',
    type: 'sender',
  },
  {
    date: '2020-10-09 05:57:27.000000',
    content: 'test',
    type: 'me',
  },
  {
    date: '2020-10-09 05:57:27.000000',
    content: 'test',
    type: 'me',
  },
  {
    date: '2020-10-09 05:57:27.000000',
    content: 'test',
    type: 'sender',
  },
  {
    date: '2020-10-09 05:57:27.000000',
    content: 'test',
    type: 'me',
  },
  {
    date: '2020-10-09 05:57:27.000000',
    content: 'test',
    type: 'me',
  },
  {
    date: '2020-10-09 05:57:27.000000',
    content: 'test',
    type: 'sender',
  },
];

const ChatDetailScreen = () => {
  const [messageData, setMessageData] = useState([]);
  const [newMessageText, setNewMessageText] = useState('');
  /** Start Of Lifecycle Section */
  // Did Mount
  useEffect(() => {
    console.log('ChatDetailScreen.js did mount');
    setMessageData(messages);
  }, []);
  /** End Of Lifecycle Section */
  /** Start Of Functional Section */
  /** End Of Functional Section */
  /** Start Of Render Section */
  // message list
  const renderMessageList = () => {
    return (
      <View style={styles.messageListContainer}>{renderMessageItem()}</View>
    );
  };
  // message item
  const renderMessageItem = () => {
    return messageData.map((item, index) => {
      const isSender = item.type === 'sender';
      return (
        <View key={index} style={styles.messageItemContainer}>
          <View
            style={
              isSender
                ? styles.messageDateContainerSender
                : styles.messageDateContainerMe
            }>
            <Text>{moment(item.date).format('DD - MM - YYYY, HH:mm')}</Text>
          </View>
          <View
            style={
              isSender
                ? styles.messageContentContainerSender
                : styles.messageContentContainerMe
            }>
            <Text style={isSender ? {} : styles.messageContentTextMe}>
              {item.content}
            </Text>
          </View>
        </View>
      );
    });
  };
  // send message box
  const renderSendMessageBox = () => {
    return (
      <View style={styles.sendMessageBoxContainer}>
        <TextInput
          style={styles.messageInput}
          onChangeText={(text) => setNewMessageText(text)}
          value={newMessageText}
        />
        <View style={styles.messageIconContainer}>
          <Ionicons
            style={styles.messageIcon}
            name="send"
            size={21}
            color={PRIMARY}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <ScrollView>{renderMessageList()}</ScrollView>
      {renderSendMessageBox()}
    </View>
  );
  /** End Of Render Section */
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: WHITE,
  },
  // message list
  messageListContainer: {
    marginTop: 8,
  },
  // message item
  messageItemContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  messageDateContainerSender: {
    marginBottom: 4,
    alignSelf: 'flex-start',
  },
  messageDateContainerMe: {
    marginBottom: 4,
    alignSelf: 'flex-end',
  },
  messageContentContainerSender: {
    padding: 8,
    borderWidth: 1,
    borderColor: GRAY,
    borderRadius: 4,
    alignSelf: 'flex-start',
    maxWidth: '65%',
  },
  messageContentContainerMe: {
    padding: 8,
    backgroundColor: PRIMARY,
    borderWidth: 1,
    borderColor: PRIMARY,
    borderRadius: 4,
    alignSelf: 'flex-end',
    maxWidth: '65%',
  },
  messageContentTextMe: {
    color: WHITE,
  },
  // send message box
  sendMessageBoxContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: PRIMARY,
    borderTopWidth: 1,
    borderTopColor: LIGHT_GRAY,
  },
  messageInput: {
    flex: 1,
    padding: 8,
    backgroundColor: WHITE,
    color: GRAY,
    borderWidth: 1,
    borderColor: PRIMARY,
    borderRadius: 4,
  },
  messageIconContainer: {
    padding: 4,
    backgroundColor: WHITE,
    borderRadius: 40,
    marginLeft: 8,
  },
  messageIcon: {
    padding: 4,
  },
});

export default ChatDetailScreen;
