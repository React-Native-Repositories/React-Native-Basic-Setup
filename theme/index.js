import React from 'react';
import {DarkTheme, DefaultTheme} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ThemeColors = {
  darkMode: {
    background: '#000000',
    menubarPrimary: '#161618',
    menubarSecondory: '#212124',
    primaryText: '#FFFFFF',
    secondaryText: '#818181',
  },
  lightMode: {
    background: '#FFFFFF',
    menubarPrimary: '#FFFFFF',
    menubarSecondory: '#FFFFFF',
    inputLabelColor: '#423F3F',
    // input
    inputBorder:'#E8F0FE',
    inputBackground:'#f7f6f7',
    // others
    headerBlack: '#231F20',
    subHeaderBlack: '#202124',
    text: '#5F6368',
    placeholderTextColor:'#9D9D9D'
  },
  common: {
    blue: '#276EF1',
    red: '#eb413e',
    tabInactive: '#00000029',
    tabactive: '#3C4043',
    placeholderTextColor: '#5F6368',
    darkShadow:'#00000029'
  },

  white: '#FFFFFF',
  blue: '#276EF1',

  // black:
  headerBlack: '#231F20',
  subHeaderBlack: '#202124',
  black: '#000',

  text: '#5F6368',

  buttonBorder: '#E8F0FE',
  tabInactive: '#00000029',
  tabactive: '#3C4043',

  red: '#eb413e',
  inputLabelColor: '#423F3F',

  light: {
    text: '#000000',
    background: '#FCFCFC',
    borderColor: '#E8F0FE',
    inputText: '#3C4043',
    inputLabelColor: '#423F3F',
  },
  dark: {
    text: '#fff',
    background: '#000000',
    headerColor: '#161618',
    borderColor: '#5F6368',
    secondaryTextColor: '#818181',
  },
  primary: '#FCFCFC',
  textGray: '#5F6368',
  placeholderTextColor: '#5F6368',
  redActive: '#B2121B',
  redInactive: '#D7242E',
  green: '#05A357',
};

// native base
import {extendTheme} from 'native-base';

export const NativeBaseTheme = extendTheme({
  colors: ThemeColors,
  config: {
    useSystemColorMode: false,
    initialColorMode: 'light',
  },
});

// Define the colorModeManager,
// here we are using react-native-async-storage (https://react-native-async-storage.github.io/async-storage/)
export const colorModeManager = {
  get: async () => {
    try {
      let val = await AsyncStorage.getItem('@color-mode');
      return val === 'dark' ? 'dark' : 'light';
    } catch (e) {
      return 'light';
    }
  },
  set: async value => {
    try {
      await AsyncStorage.setItem('@color-mode', value);
    } catch (e) {}
  },
};

// navigation
export const NavigationDefaultTheme = DefaultTheme;
export const NavigationDarkTheme = DarkTheme;

export const PreferencesContext = React.createContext({
  toggleTheme: () => {},
  isThemeDark: false,
});
