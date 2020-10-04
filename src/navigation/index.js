import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {navigationRef} from './services';
import SplashScreen from '../screens/Splash/SplashScreen';
import HomeScreen from '../screens/Home/HomeScreen';

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
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

// const TabNavigator = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({route}) => ({
//         tabBarIcon: ({focused}) => {
//           let iconName;
//           if (route.name === 'Home') {
//             iconName = focused ? 'home' : 'home-outline';
//           } else if (route.name === 'About') {
//             iconName = focused
//               ? 'information-circle'
//               : 'information-circle-outline';
//           } else if (route.name === 'Profile') {
//             iconName = focused ? 'person' : 'person-outline';
//           }

//           return (
//             <Ionicons
//               name={iconName}
//               size={21}
//               color={focused ? PRIMARY : DISABLED}
//             />
//           );
//         },
//       })}
//       tabBarOptions={{
//         activeTintColor: PRIMARY,
//         inactiveTintColor: DISABLED,
//       }}>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="About" component={AboutScreen} />
//       <Tab.Screen name="Profile" component={ProfileScreen} />
//     </Tab.Navigator>
//   );
// };

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
