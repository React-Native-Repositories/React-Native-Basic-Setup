import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Auth/Login';
import Register from '../screens/Auth/Register';
import {ThemeColors} from '../../theme';
import HomeTabNavigation from './home-navigator';
import IntroScreen from '../screens/Welcome';
import LanguageSelectorPage from '../screens/Main/Stack-Screens/language';
import IntroLoader from '../screens/IntroLoader';
const Stack = createStackNavigator();
const AuthStackNavigator = () => (
  <Stack.Navigator
    detachInactiveScreens={false}
    screenOptions={{
      animationEnabled: false,
      headerShown: false,
      headerStyle: {
        backgroundColor: ThemeColors.primary,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'normal',
        color: '#fff',
        headerShown: false,
      },
    }}>
    <Stack.Screen name="IntroLoader" component={IntroLoader} />
    <Stack.Screen name="Intro" component={IntroScreen} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen
      name="LanguageSelector"
      component={LanguageSelectorPage}
      options={{
        headerShown: false,
        headerBackTitleVisible: false,
      }}
    />
    <Stack.Screen
      name="Main"
      component={HomeTabNavigation}
      options={{
        headerShown: false,
        headerBackTitleVisible: false,
      }}
    />
  </Stack.Navigator>
);

export default AuthStackNavigator;
