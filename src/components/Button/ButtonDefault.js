import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {PRIMARY, WHITE, GRAY} from '../../config/colors';

const ButtonDefault = (props) => {
  return (
    <TouchableOpacity
      style={
        props.disabled ? styles.buttonContainerDisabled : styles.buttonContainer
      }
      onPress={props.onPress}>
      {props.loading ? (
        <ActivityIndicator size="small" color={WHITE} />
      ) : (
        <Text style={styles.buttonText}>{props.title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: PRIMARY,
    paddingVertical: 16,
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonContainerDisabled: {
    backgroundColor: GRAY,
    paddingVertical: 16,
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText: {
    color: WHITE,
  },
});

export default ButtonDefault;
