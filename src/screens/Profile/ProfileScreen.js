import React, {useEffect, useState} from 'react';
import LoginScreen from '../Login/LoginScreen';
import {useStoreState, useStoreActions} from 'easy-peasy';
import ProfilePencari from './ProfilePencari';
import ProfilePemilik from './ProfilePemilik';

const ProfileScreen = () => {
  const user = useStoreState((state) => state.user);
  const [activeSpoiler, setActiveSpoiler] = useState('');
  /** Start Of Lifecycle Section */
  // Did Mount
  useEffect(() => {
    console.log('ProfileScreen.js did mount');
  }, []);
  /** End Of Lifecycle Section */
  /** Start Of Functional Section */
  /** End Of Functional Section */
  /** Start Of Render Section */
  // Login Screen
  const renderLoginScreen = () => {
    return <LoginScreen />;
  };
  // Profile Screen
  const renderProfileScreen = () => {
    if (user.data.tipe === 'pemilik') {
      return <ProfilePemilik />;
    } else if (user.data.tipe === 'pencari') {
      return <ProfilePencari />;
    }
  };

  if (user !== null) {
    return renderProfileScreen();
  } else {
    return renderLoginScreen();
  }
  /** End Of Render Section */
};

export default ProfileScreen;
