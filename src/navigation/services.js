import * as React from 'react';
import {StackActions} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';

export const navigationRef = React.createRef();

function navigate(screenName, params) {
  navigationRef.current?.navigate(screenName, params);
}

function push(screenName, params) {
  navigationRef.current?.dispatch(StackActions.push(screenName, params));
}

function reset(screenName) {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [{name: screenName}],
    }),
  );
}

function goBack() {
  navigationRef.current?.goBack();
}

export default {navigate, push, reset, goBack};
