import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {navigationRef} from './services';
import {GRAY, PRIMARY} from '../config/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useStoreState} from 'easy-peasy';
import SplashScreen from '../screens/Splash/SplashScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import JelajahScreen from '../screens/Jelajah/JelajahScreen';
import ChatScreen from '../screens/Chat/ChatScreen';
import ChatDetailScreen from '../screens/Chat/ChatDetailScreen';
import LoginFormScreen from '../screens/Login/LoginFormScreen';
import RegisterScreen from '../screens/Register/RegisterScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import IklanScreen from '../screens/Properti/IklanScreen';
import TambahIklanScreen from '../screens/Properti/TambahIklanScreen';
import TambahIklanScreen2 from '../screens/Properti/TambahIklanScreen2';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChatDetailScreen"
        component={ChatDetailScreen}
        options={({route}) => ({
          title: route.params.name,
        })}
      />
      <Stack.Screen
        name="LoginFormScreen"
        component={LoginFormScreen}
        options={{headerTitle: ''}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{headerTitle: 'Register'}}
      />
      <Stack.Screen
        name="TambahIklanScreen"
        component={TambahIklanScreen}
        options={{headerTitle: 'Tambah Iklan'}}
      />
      <Stack.Screen
        name="TambahIklanScreen2"
        component={TambahIklanScreen2}
        options={{headerTitle: 'Informasi Detail Iklan'}}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  const user = useStoreState((state) => state.user);
  const defaultAdditionalTab = (
    <Tab.Screen name="Jelajah" component={JelajahScreen} />
  );
  const pemilikAdditionalTab = (
    <Tab.Screen name="Iklan" component={IklanScreen} />
  );
  const additionalTab =
    user && user.data.tipe === 'pemilik'
      ? pemilikAdditionalTab
      : defaultAdditionalTab;
  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="initialRoute"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Jelajah') {
            iconName = focused ? 'grid' : 'grid-outline';
          } else if (route.name === 'Chat') {
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Iklan') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          }

          return (
            <Ionicons
              name={iconName}
              size={21}
              color={focused ? PRIMARY : GRAY}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: PRIMARY,
        inactiveTintColor: GRAY,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      {additionalTab}
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  const routeNameRef = React.useRef();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() =>
        (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
      }
      onStateChange={() => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;

        if (previousRouteName !== currentRouteName) {
          // set the screen
          // Analytic.logScreen(currentRouteName);
        }

        // save the current route name for later comparison
        routeNameRef.current = currentRouteName;
      }}>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
